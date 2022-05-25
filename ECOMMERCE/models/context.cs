using Microsoft.EntityFrameworkCore;
namespace ECOMMERCE.models
{
    public class context:DbContext
    {
        public context(DbContextOptions options) : base(options) { }
        public DbSet<Category> categories{ get; set; }
        public DbSet<Product> products{ get; set; }

    }
}
