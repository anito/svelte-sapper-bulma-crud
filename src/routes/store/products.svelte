<script>
    import Card from "../../components/Card.svelte";
    import CategorySelection from "../../components/CategorySelection.svelte";
    import SupplierSelection from "../../components/SupplierSelection.svelte";

    import { onMount } from "svelte";

    let products = [];
    let product = {};

    let buttonSaveIsLoading = false;
    $: buttonSaveClass =
        buttonSaveIsLoading === true
            ? "button is-success is-loading"
            : "button is-success";

    let modalIsVisible = false;
    $: modalClass = modalIsVisible === true ? "modal is-active" : "modal";

    onMount(async () => {
        products = getProducts();
    });

    async function getProducts() {
        // a simple use of "fetch"
        const result = await fetch(
            "https://northwind.now.sh/api/products/?_expand=category&_expand=supplier"
        );

        if (result.ok) return result.json();

        throw new Error(
            `🚨 Catastrofic failure 🚨 ${result.status} ${result.statusText}`
        );
    }

    function onItemClick(item) {
        product = item;
        openModal();
    }

    async function onDeleteClick(item) {
        product = item;
        if (confirm(`Delete "${product.name}"?`)) {
            await http.delete(`/products/${product.id}`);
            products = getProducts();
        }
    }

    function closeModal() {
        modalIsVisible = false;
    }

    function openModal() {
        modalIsVisible = true;
    }

    function onNewClick() {
        product = {
            name: "",
            description: ""
        };
        openModal();
    }

    async function save() {
        try {
              buttonSaveIsLoading = true;
              let result = await http({
                    method: product.id ? "put" : "post",
                    url: product.id ? `/products/${product.id}` : "/products",
                    data: product
            });
            products = getProducts();
            closeModal();
        } catch (error) {
            console.log(error);
        } finally {
            buttonSaveIsLoading = false;
        }
    }
</script>

<style>

    .card {
        max-width: 20%;
        background: #121212;
	}

</style>

<svelte:head>
    <title>Products</title>
</svelte:head>

<Card title="Products">
    <div>

        {#await products}
            <progress class="progress is-small is-primary" max="100">15%</progress>
        {:then list}

            <table class="table is-striped is-hoverable">
                <thead>
                    <tr>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Supplier</th>
                      <th width="100px">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {#each list as item}
                        <tr>
                            <td class="col-name">{item.name}</td>
                            <td class="col-category-name">{item.category.name}</td>
                            <td class="col-company-name">{item.supplier.companyName}</td>
                            <td class="col-action">
                                <a href="javascript:;" on:click={() => onItemClick(item)}>
                                    <span class="icon is-large">
                                        <i class="fas fa-edit" />
                                    </span>
                                </a>

                                <a href="javascript:;" on:click={() => onDeleteClick(item)}>
                                    <span class="icon is-small">
                                        <i class="fas fa-trash" />
                                    </span>
                                </a>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}

    </div>
    <a
        href="javascript:;"
        slot="footer"
        class="card-footer-item"
        on:click={onNewClick}>
        New
    </a>
</Card>

<div class={modalClass}>
    <div class="modal-background" />
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">{product.name}</p>
            <button class="delete" aria-label="close" on:click={closeModal} />
        </header>
        <section class="modal-card-body">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input
                        class="input"
                        type="text"
                        placeholder=""
                        bind:value={product.name} />
                </div>
            </div>
            <div class="columns is-desktop">
                <div class="column field">
                    <label class="label">Category</label>
                    <div class="control">
                        <CategorySelection bind:selected={product.categoryId} />
                    </div>
                </div>
                <div class="column field">
                    <label class="label">Supplier</label>
                    <div class="control">
                        <SupplierSelection bind:selected={product.supplierId} />
                    </div>
                </div>
            </div>
            <div class="columns is-desktop">
                <div class="column field">
                    <label class="label">Quantity Per Unit</label>
                    <div class="control">
                        <input
                            class="input"
                            type="text"
                            placeholder=""
                            bind:value={product.quantityPerUnit} />
                    </div>
                </div>
                <div class="column field">
                    <label class="label">Unit Price</label>
                    <div class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder=""
                          bind:value={product.unitPrice} />
                    </div>
                </div>
                <div class="column field">
                    <label class="label">Unit in Stock</label>
                    <div class="control">
                        <input
                            class="input"
                            type="text"
                            placeholder=""
                            bind:value={product.unitsInStock} />
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label">
                    Discontinued 
                    <input type="checkbox" bind:checked={product.discontinued} />
                </label>
            </div>

        </section>
        <footer class="modal-card-foot">
            <button class={buttonSaveClass} on:click={save}>Save changes</button>
            <button class="button" on:click={closeModal}>Cancel</button>
        </footer>
    </div>
</div>
