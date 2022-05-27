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
        public DbSet<Order> orders { get; set; }
        public DbSet<OrderProduct> orderProducts { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<OrderProduct>()
                .HasKey(or => new { or.o_Id, or.p_Id});
        }
    }
}
