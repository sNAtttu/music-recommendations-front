<script>
    export let recommendations = [];
</script>

<h1>Found recommendations</h1>

{#each recommendations as recommendation}
    <div>
        <img src={recommendation.album.images[0].url} alt="Recommended album cover" />
        {#each recommendation.artists as artist}
            <div>
                <h2>{artist.name}</h2>
                <a href={artist.external_urls.spotify}>Listen in Spotify</a>
                <p>Spotify link: {artist.uri}</p>
            </div>
        {/each}
    </div>
{/each}

<style>

</style>