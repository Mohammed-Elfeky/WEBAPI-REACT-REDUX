using ECOMMERCE.DTO;
using ECOMMERCE.models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace ECOMMERCE.repos
{
    public class OrderRepo : IOrderRepo
    {
        private readonly context context;

        public OrderRepo(context context)
        {
            this.context = context;
        }

        public int addOrder(Order order)
        {
            context.orders.Add(order);
            context.SaveChanges();
            return order.Id;
        }
        public List<OrderUserNameProducts> getAllOrders()
        {
            var orders = context.orders
                .Include(o=>o.OrderProducts).ThenInclude(op=>op.Product)
                .Include(o => o.User).Select(o=>new OrderUserNameProducts()
                {
                    id=o.Id,
                    UserName=o.User.UserName,
                    total=o.total,
                    products=o.OrderProducts.
                    Select(o=>new Product { Name = o.Product.Name, Price = o.Product.Price, img = o.Product.img,count=o.quantity}).ToList()
                }).ToList();
            return orders;
        }
    }
}
