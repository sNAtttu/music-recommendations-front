<script>
	import GenreList from './components/GenreList.svelte'
	import { onMount } from 'svelte';
	export let apiBaseUrl;

	let genres = [];

	const genreFunctionName = 'FetchRecommendationsSpotify';

	onMount(async () => {
		const response = await fetch(`${apiBaseUrl}${genreFunctionName}`);
		genres = await response.json();
	});

</script>

<main>
	<GenreList itemList={genres}/>	
</main>