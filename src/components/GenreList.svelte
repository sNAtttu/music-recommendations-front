<script>
    export let itemList;
    export let apiBaseUrl;
    export let recommendations;

    const recommendationFunctionName = "FetchRecommendationsFromSpotify";
    let selectedGenres = [];

    const handleGenreButtonClick = event => {
        const selectedGenre = event.target;
        const index = selectedGenres.findIndex(sg => sg.innerText === selectedGenre.innerText);
        if(index === -1) {
            selectedGenres.push(selectedGenre);
            selectedGenre.style.backgroundColor = "#7FFF00";
        }
        else {
            selectedGenres.splice(index, 1);
            selectedGenre.style.backgroundColor = "#f4f4f4";
        }

        // Interesting way of handling things in Svelte
        selectedGenres = selectedGenres;
    }

    const handleGenreSubmit = async event => {
        if(selectedGenres.length === 0) return;
        const genresTexts = selectedGenres.map(genre => genre.innerText);
        const genresQueryParams = genresTexts.join();
        const response = await fetch(`${apiBaseUrl}${recommendationFunctionName}?genres=${genresQueryParams}`);
		const recommendationsJson = await response.json();
        recommendations = recommendationsJson.tracks;
    }

    const clearAllGenres = async event => {
        selectedGenres.forEach(genre => genre.style.backgroundColor = "#f4f4f4");
        selectedGenres = [];
    }


</script>
<div class="genre-list">
    {#each itemList as item}
        <button on:click={handleGenreButtonClick} value={item}>{item}</button>
    {/each}

    <h2>Selected Genres:</h2>
    <ul>
        {#each selectedGenres as genre}
            <li>{genre.innerText}</li>
        {/each}
    </ul>
    <button on:click={handleGenreSubmit}>Find</button>
    <button on:click={clearAllGenres}>Clear All</button>
</div>
<style>
    .genre-list button { margin: 5px }
</style>