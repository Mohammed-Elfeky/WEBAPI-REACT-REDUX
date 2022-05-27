using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace ECOMMERCE.models
{
    public class AppUser:IdentityUser
    {
        public string address { get; set; }
        public virtual List<Order> orders { get; set; }
    }
}
