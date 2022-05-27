using ECOMMERCE.models;
using System.Collections.Generic;
using System.Linq;

namespace ECOMMERCE.repos
{
    public class OrderProductRepo : IOrderProductRepo
    {
        private readonly context context;

        public OrderProductRepo(context context)
        {
            this.context = context;
        }

        public int assignProductsToOrder(int order_id,List<OrderProduct> orderProducts)
        {
            foreach (var orderProduct in orderProducts)
            {
                orderProduct.o_Id = order_id;
                context.orderProducts.Add(orderProduct);
            }
            context.SaveChanges();
            return orderProducts.Count();
        }
    }
}
