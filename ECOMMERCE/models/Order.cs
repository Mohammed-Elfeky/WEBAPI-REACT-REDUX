using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace ECOMMERCE.models
{
    public class Order
    {
        public int Id { get; set; } 
        public string Address { get; set; }
        public DateTime date { get; set; }

        [ForeignKey("User")]
        public string u_id { get; set; }
        public virtual AppUser User { get; set; }
        public virtual List<OrderProduct> OrderProducts { set; get; }
    }
}
