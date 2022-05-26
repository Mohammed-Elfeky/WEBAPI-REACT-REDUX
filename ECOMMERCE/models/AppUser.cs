using Microsoft.AspNetCore.Identity;

namespace ECOMMERCE.models
{
    public class AppUser:IdentityUser
    {
        public string address { get; set; }
    }
}
