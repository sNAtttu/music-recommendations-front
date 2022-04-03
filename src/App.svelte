<script>
	import GenreList from './components/GenreList.svelte';
	import Recommendations from './components/Recommendations.svelte';
	import { onMount } from 'svelte';

	export let apiBaseUrl;

	let genres = [];
	let recommendations = [];

	const genreFunctionName = 'GetGenresFromSpotify';

	onMount(async () => {
		const response = await fetch(`${apiBaseUrl}${genreFunctionName}`);
		genres = await response.json();
	});

</script>
<body>
	<main>
		<h1>Neo</h1>
		<GenreList itemList={genres} apiBaseUrl={apiBaseUrl} bind:recommendations={recommendations} />
		<Recommendations recommendations={recommendations} />
		<br/>
	</main>
	
</body>
<style>
	body {
		background: linear-gradient(to right, rgb(11, 11, 12), rgb(50, 50, 53));
		color: aliceblue
	}
</style>