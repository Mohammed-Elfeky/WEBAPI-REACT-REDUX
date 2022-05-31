using ECOMMERCE.DTO;
using ECOMMERCE.models;
using System.Collections.Generic;

namespace ECOMMERCE.repos
{
    public interface IOrderRepo
    {
        int addOrder(Order order);
        List<OrderUserNameProducts> getAllOrders();
    }
}