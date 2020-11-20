const uri = 'api/AnimeInfo/';

function getInfo() {
    let anime = document.getElementById('animeTitle').value;
    fetch(uri + anime)
    .then(response => response.json())
    .then(data => {
        if (data.title == "nsrf")
        {
            alert("No Search Results Found! Try Again!");
        }else 
        {
            document.getElementById('responseTitle').value = data.title;
            document.getElementById('responseSyn').value = data.summary;
            document.getElementById('responseEps').value = data.numberOfEpisodes;
            document.getElementById('responseDate').value = data.releaseDate;
        }
    })
}