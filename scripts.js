function getInfo() {
    let anime = document.getElementById('animeTitle').value;
    // axios.get('/api/AnimeInfo/GetAnimeInfo/', {
    //     params: {
    //         animeRef: anime,
    //     }
    // }).then(function (response) {
    //     console.log(response)
    // })
    var requestUrl = 'https://api.jikan.moe/v3/search/anime?q=' + anime;
    fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('responseTitle').value = data.results[0].title;
        document.getElementById('responseSyn').value = data.results[0].synopsis;
        document.getElementById('responseEps').value = data.results[0].episodes;
        document.getElementById('responseDate').value = data.results[0].start_date;
    })
}