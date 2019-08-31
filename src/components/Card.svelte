<script>
    export let title = "";
    export let bgColor = "1";

</script>


<style>
    .card {
        margin: 2em auto;
        max-width: var(--card-mw);
    }
</style>

<div class="card" style="background-color: {bgColor}">
    <header class="card-header">
        <p class="card-header-title">
            {title}
        </p>
    </header>
    <div class="card-content">
        <div class="content">
            <slot />
        </div>
    </div>
    <footer class="card-footer">
        <slot name="footer" />
    </footer>
</div>