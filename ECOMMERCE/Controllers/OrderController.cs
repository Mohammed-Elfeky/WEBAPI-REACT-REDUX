using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ECOMMERCE.repos;
using ECOMMERCE.models;
using ECOMMERCE.DTO;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;

namespace ECOMMERCE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepo orderRepo;
        private readonly IOrderProductRepo orderProductRepo;

        public OrderController(IOrderRepo orderRepo,IOrderProductRepo orderProductRepo)
        {
            this.orderRepo = orderRepo;
            this.orderProductRepo = orderProductRepo;
        }

        [HttpGet]
        public IActionResult allOrders()
        {
            try
            {
                List<Order> orders=orderRepo.getAllOrders();
                return Ok(orders);
            }
            catch
            {
                return Problem("something went wrong");
            }
        }

        [HttpPost]
        [Authorize]
        public IActionResult SubmmitOrder(OrderDTO order)
        {
            try
            {
                int order_id=orderRepo.addOrder(order.Order);
                orderProductRepo.assignProductsToOrder(order.Order.Id, order.orderProducts);
                return Ok();
            }
            catch
            {
                return Problem("something went wrong");
            }
        }


    }
}
