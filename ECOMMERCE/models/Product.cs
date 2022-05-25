using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ECOMMERCE.models
{
    public class Product
    {
        public int Id { get; set; }
        [Column(TypeName = "varchar(50)")]
        [Required]
        public string Name { get; set; }
        [Required]
        public decimal Price { get; set; }
        [Column(TypeName = "varchar(200)")]
        [Required]
        public string Description { get; set; }

        [Column(TypeName = "varchar(50)")]
        public string img { get; set; }

        [ForeignKey("Category")]
        [Required]
        public int CategoryId { get; set; }
        public virtual Category Category { get; set; }

    }
}
