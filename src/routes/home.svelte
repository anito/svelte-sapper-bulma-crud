<script context="module">
	export async function preload(page, session) {
		// return this.redirect(308, '');
	}
</script>


<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<script>
import  Card  from '../components/Card.svelte'
</script>

<Card title="Home">
	<div>
		Hello World
	</div>
</Card>