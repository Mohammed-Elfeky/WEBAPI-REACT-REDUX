using ECOMMERCE.models;
using System.Collections.Generic;

namespace ECOMMERCE.DTO
{
    public class OrderUserNameProducts
    {
        public int id { get; set; }
        public decimal total { get; set; }
        public string UserName { get; set; }
        public int count { set; get; }
        public List<Product> products { get; set; }=new List<Product>();
    }
}
