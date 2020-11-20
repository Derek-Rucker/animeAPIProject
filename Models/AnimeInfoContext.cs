using Microsoft.EntityFrameworkCore;

namespace AnimeAPI.Models
{
    public class AnimeInfoContext : DbContext
    {
        public AnimeInfoContext(DbContextOptions<AnimeInfoContext> options)
            : base(options)
        {
        }

        public DbSet<AnimeInfo> AnimeInfos { get; set; }
    }
}