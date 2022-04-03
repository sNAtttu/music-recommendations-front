<script>
    export let recommendations = [];
</script>

<h1>Found recommendations</h1>

{#each recommendations as recommendation}
    <div class="recommendation-container">
        <img src={recommendation.album.images[1].url} alt="Recommended album cover" />
        {#each recommendation.artists as artist}
            <div>
                <h2>Artist: {artist.name}</h2>
                <a href={artist.external_urls.spotify}>Listen in Spotify</a>
                <p>Spotify link: {artist.uri}</p>
            </div>
        {/each}
    </div>
{/each}

<style>
    .recommendation-container {
        display: flex;
        flex-direction: row;
    }
</style>