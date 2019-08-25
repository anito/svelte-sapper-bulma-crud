<script context="module">
	 import Card from "../../components/Card.svelte";

	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	h1 {
		font-size: 3em;
		font-weight: 700;
		margin: 30px;
	}
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
	li {
		list-style: none;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<Card title="Posts">
	<ul>
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
		{/each}
	</ul>
</Card>