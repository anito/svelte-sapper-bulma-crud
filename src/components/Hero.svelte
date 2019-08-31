<script>
	import ParallaxCanvas from './ParallaxCanvas.svelte';
	import ParallaxLogo from './ParallaxLogo.svelte';

	export let title;
	export let tagline;
	export let logotype;
	export let outline;
	export let type;
</script>

<style>
	.hero {
		position: relative;
		margin: 10rem auto;
		padding: 0 var(--side-nav);
		max-width: 120rem;
	}

	h3 { color: var(--text) }

	.hero {
		margin: 10rem auto;
	}

	.hero h3, .logotype {
		position: relative;
		left: 1.6rem;
	}

	.hero h3 {
		font-size: 2rem;
	}

	.logotype {
		height: 4rem;
	}

	@media (min-width: 640px) {
		.logotype {
			height: 6rem;
		}

		.hero h3 {
			font-size: var(--h3);
		}
	}

	@media (min-width: 800px) {
		.hero {
			margin: 15rem auto;
		}

		.hero h3, .logotype {
			left: 3rem;
		}
	}
</style>

{#if type == 'canvas'}
	<ParallaxCanvas alt="{title} logo" src={outline}/>
{:else if type == 'logo'}
	<ParallaxLogo alt="{title} logo" src={outline}/>
{/if}

<section class="hero">
	<img alt="{title} logotype" class="logotype" src={logotype}>
	<h3>{tagline}</h3>
</section>