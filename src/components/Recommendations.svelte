<script>
    export let recommendations = [];
    console.log(recommendations);
</script>



{#if recommendations.length > 0}
    <h1>Found recommendations</h1>
    <div class="recommendation-container">
        <div>
            <h2>More popular artist recommendation</h2>
            <img src={recommendations[0].album.images[1].url} alt="Recommended album cover" />
            <h2>Artist: {recommendations[0].artists[0].name}</h2>
            <h3>Album: {recommendations[0].album.name}</h3>
            <a href={recommendations[0].artists[0].external_urls.spotify}>Listen in Spotify</a>
            <p>Spotify link: {recommendations[0].artists[0].uri}</p>
        </div>
        <div>
            <h2>More underground artist recommendation</h2>
            <img src={recommendations[1].album.images[1].url} alt="Recommended album cover" />
            <h2>Artist: {recommendations[1].artists[0].name}</h2>
            <h3>Album: {recommendations[1].album.name}</h3>
            <a href={recommendations[1].artists[0].external_urls.spotify}>Listen in Spotify</a>
            <p>Spotify link: {recommendations[1].artists[0].uri}</p>
        </div>
    </div>
{/if}
<style>
    .recommendation-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>