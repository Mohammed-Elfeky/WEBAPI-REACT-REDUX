using ECOMMERCE.models;
using System.Collections.Generic;

namespace ECOMMERCE.DTO
{
    public class OrderDTO
    {
        public Order Order { get; set; }
        public List<OrderProduct> orderProducts { get; set; }=new List<OrderProduct>();
    }
}
