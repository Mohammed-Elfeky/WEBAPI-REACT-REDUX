using ECOMMERCE.models;
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
        public List<Order> getAllOrders()
        {
            return context.orders.ToList();
        }
    }
}
