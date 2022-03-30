<script>
	import GenreList from './components/GenreList.svelte';
	import Recommendations from './components/Recommendations.svelte';
	import { onMount } from 'svelte';

	export let apiBaseUrl;

	let genres = [];
	let recommendations = {};

	const genreFunctionName = 'GetGenresFromSpotify';

	onMount(async () => {
		const response = await fetch(`${apiBaseUrl}${genreFunctionName}`);
		genres = await response.json();
	});

</script>

<main>
	<GenreList itemList={genres} apiBaseUrl={apiBaseUrl} bind:recommendations={recommendations} />
	<Recommendations recommendations={recommendations} />
</main>