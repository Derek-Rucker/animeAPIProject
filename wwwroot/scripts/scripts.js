const uri = 'api/AnimeInfo/';

function getInfo() {
    let anime = document.getElementById('animeTitle').value;
    // axios.get('api/AnimeInfo/', {
    //     params: {
    //         animeRef: anime,
    //     }
    // }).then(function (response) {
    //     console.log(response)
    // })    
    fetch(uri + anime)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('responseTitle').value = data.title;
        document.getElementById('responseSyn').value = data.summary;
        document.getElementById('responseEps').value = data.numberOfEpisodes;
        document.getElementById('responseDate').value = data.releaseDate;
    })
}