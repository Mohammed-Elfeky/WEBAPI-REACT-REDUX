using Microsoft.AspNetCore.Mvc;
using ECOMMERCE.repos;
using ECOMMERCE.models;
using Microsoft.AspNetCore.Authorization;

namespace ECOMMERCE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IproductRepo iproductRepo;

        public ProductController(IproductRepo iproductRepo)
        {
            this.iproductRepo = iproductRepo;
        }

        [HttpGet]
        public IActionResult getAll()
        {
            try
            {
                return Ok(iproductRepo.GetAll());
            }
            catch
            {
                return Problem("something went wrong");
            }

        }

        [HttpGet("{id:int}")]
        public IActionResult getproduct(int id)
        {
            try
            {
                Product product = iproductRepo.FindById(id);
                if (product == null)
                {
                    return Problem("the id doesn't exist");
                }
                return Ok(product);
            }
            catch
            {
                return Problem("something went wrong");
            }
        }

        [HttpPost]
        [Authorize(Roles ="Admin")]
        public IActionResult addproduct(Product product)
        {
            try
            {
                Product prdct = iproductRepo.add(product);
                return Ok(prdct);
            }
            catch
            {
                return Problem("something went wrong");
            }
        }


        [HttpPut("{id:int}")]
        [Authorize(Roles = "Admin")]
        public IActionResult editproduct(int id, Product product)
        {

            try
            {
                    if (iproductRepo.FindById(id) == null) return Problem("the id doesn't exist");
                    return Ok(iproductRepo.Edit(id, product));
            }
            catch
            {
                return Problem("something went wrong");
            }
        }


        [HttpDelete("{id:int}")]
        [Authorize(Roles = "Admin")]
        public IActionResult deleteproduct(int id)
        {
            try
            {
                if (iproductRepo.FindById(id) == null)
                {
                    return Problem("the id doesn't exist");
                }
                return Ok(iproductRepo.Delete(id));
            }
            catch
            {
                return Problem("something went wrong");
            }
        }
    }
}
