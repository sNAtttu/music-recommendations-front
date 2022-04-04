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
        }
        else {
            selectedGenres.splice(index, 1);
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
        recommendations.sort((a, b) => a.popularity > b.popularity);
        console.log(recommendations)
    }

    const clearAllGenres = async event => {
        selectedGenres = [];
    }


</script>
<div class="genre-list">
    <div class="button-container">
        {#each itemList as item}
            <button class="genre-button" on:click={handleGenreButtonClick} value={item}>{item}</button>
        {/each}
    </div>
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
    .button-container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .button-container .genre-button {
        flex: 0 0 10%;
        background: transparent;
        box-sizing: border-box;
        border-radius: 0.6rem;
        align-self: center;
        font-size: 17px;
        font-weight: 400;
        text-align: center;
        color: aliceblue;
        padding: 0.5em;
        font-family: Pangolin;
        font-weight: bold;
        cursor: pointer;
    }

    .genre-button:hover {
        transition: 0.4s ease-in-out;
        background: rgb(205, 169, 50);
        color: rgb(14, 14, 17);
        }
    

</style>