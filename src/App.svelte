<script>
	import { onMount } from 'svelte';
	export let name;
	export let apiBaseUrl;

	let genres = [];

	const genreFunctionName = 'FetchRecommendationsSpotify';

	onMount(async () => {
		const response = await fetch(`${apiBaseUrl}${genreFunctionName}`);
		genres = await response.json();
	});

</script>

<main>
	<h1>Hello {name}!</h1>
	<ul>
		{#each genres as genre}
			<li>
				{genre}
			</li>
		{/each}
	</ul>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>