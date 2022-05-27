using ECOMMERCE.models;
using System.Collections.Generic;

namespace ECOMMERCE.repos
{
    public interface IOrderProductRepo
    {
        int assignProductsToOrder(int order_id, List<OrderProduct> orderProducts);
    }
}