<script>
    export let itemList;

    let selectedGenres = [];

    const handleGenreButtonClick = event => {
        const selectedGenre = event.target.innerText;
        const index = selectedGenres.findIndex(sg => sg === selectedGenre);
        if(index === -1) {
            selectedGenres.push(selectedGenre);
            event.target.style.backgroundColor = "#7FFF00";
        }
        else {
            selectedGenres.splice(index, 1);
            event.target.style.backgroundColor = "#f4f4f4";
        }

        // Interesting way of handling things in Svelte
        selectedGenres = selectedGenres;
    }

    const handleGenreSubmit = event => {
        console.log("Selected genres: ");
        console.log(selectedGenres);
    }

</script>
<div class="genre-list">
    {#each itemList as item}
        <button on:click={handleGenreButtonClick} value={item}>{item}</button>
    {/each}

    <h2>Selected Genres:</h2>
    <ul>
        {#each selectedGenres as genre}
            <li>{genre}</li>
        {/each}
    </ul>
    <button on:click={handleGenreSubmit}>Find</button>
</div>
<style>
    .genre-list button { margin: 5px }
</style>