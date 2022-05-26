using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ECOMMERCE.models;
using Microsoft.AspNetCore.Identity;

namespace ECOMMERCE.models
{
    public class context: IdentityDbContext<AppUser>
    {
        public context(DbContextOptions options) : base(options) { }
        public DbSet<Category> categories{ get; set; }
        public DbSet<Product> products{ get; set; }

    }
}
