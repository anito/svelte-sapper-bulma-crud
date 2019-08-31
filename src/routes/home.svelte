<script context="module">
	export async function preload(page, session) {
		// return this.redirect(308, '');
	}
</script>

<script>
	import { Hero, Card } from '../components.js';
	import { Blurb } from '@sveltejs/site-kit';
	
</script>

<svelte:head>
	<title>Sapper Home</title>
</svelte:head>

<style>
	
</style>
<Hero
	title="Sapper"
	tagline="Powered by Axel Nitzschner"
	outline="logo-mask.svg"
	logotype="doojoo-logotype.svg"
	type="canvas"
/>
<Card title="Home" bgColor="#ffffffdd">
	<div>
		Hello World
	</div>
</Card>

<Blurb>
	<a href="https://svelte.dev" slot="one">
		<h2>Powered by DOOJOO</h2>
		<p>DOOJOO is an webdesign agency — building slick websites</p>

		<span class="learn-more">learn more</span>
	</a>

	<a href="docs" slot="two">
		<h2>Best of both worlds</h2>
		<p>All the SEO and progressive enhancement of a server-rendered app, with the slick navigation of an SPA</p>

		<span class="learn-more">learn more</span>
	</a>

	<a href="docs" slot="three">
		<h2>Build fast</h2>
		<p>Hit the ground running with advanced routing, server-side rendering, code-splitting, offline support and more</p>

		<span class="learn-more">learn more</span>
	</a>
</Blurb>