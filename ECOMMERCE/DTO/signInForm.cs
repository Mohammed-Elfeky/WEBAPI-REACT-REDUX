using System.ComponentModel.DataAnnotations;
namespace ECOMMERCE.DTO
{
    public class signInForm
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

    }
}
