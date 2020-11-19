using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JikanDotNet;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace AnimeAPI.Controllers
{
    [ApiController]
    [Route("api/AnimeInfo/")]
    public class AnimeInfoController : ControllerBase
    {
        private readonly ILogger<AnimeInfoController> _logger;

        public AnimeInfoController(ILogger<AnimeInfoController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<AnimeInfo> GetAnimeInfo(int animeRef)
        {
            IJikan jikan = new Jikan();
            
            Anime anime = await jikan.GetAnime(animeRef);
            return new AnimeInfo
            {
                Title = anime.TitleEnglish,
                ReleaseDate = anime.Aired.ToString(),
                NumberOfEpisodes = anime.Episodes.GetValueOrDefault(),                
                Summary = anime.Synopsis
            };
        }
    }
}
