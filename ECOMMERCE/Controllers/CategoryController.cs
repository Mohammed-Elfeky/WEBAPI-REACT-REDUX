using Microsoft.AspNetCore.Mvc;
using ECOMMERCE.repos;
using ECOMMERCE.models;
using System;
using System.Collections.Generic;

namespace ECOMMERCE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IcategoryRepo icategoryRepo;

        public CategoryController(IcategoryRepo icategoryRepo)
        {
            this.icategoryRepo = icategoryRepo;
        }

        [HttpGet]
        public IActionResult getAll()
        {
            try
            {
                return Ok(icategoryRepo.GetAll());  
            }
            catch
            {
                return Problem("something went wrong");
            }

        }

        [HttpGet("{id:int}")]
        public IActionResult getcat(int id)
        {
            try
            {
                Category category = icategoryRepo.FindById(id);
                if (category == null)
                {
                    return Problem("the id doesn't exist");
                }
                return Ok(category);
            }
            catch {
                return Problem("something went wrong");
            }
        }

        [HttpPost]
        public IActionResult addcat(Category category)
        {
            try
            {
                if (icategoryRepo.FindByName(category.Name)) return BadRequest("the name is dublicated");
                Category cat = icategoryRepo.add(category);
                return Ok(cat);
            }
            catch
            {
                return Problem("something went wrong");
            }
        }


        [HttpPut("{id:int}")]
        public IActionResult editcat(int id, Category category)
        {

            try
            {
                if (icategoryRepo.FindById(id) == null) return Problem("the id doesn't exist");
                return Ok(icategoryRepo.Edit(id, category));
            }
            catch
            {
                return Problem("something went wrong");
            }
        }


        [HttpDelete("{id:int}")]
        public IActionResult deletecat(int id)
        {
            try
            {
                if (icategoryRepo.FindById(id) == null)
                {
                    return BadRequest("the id doesn't exist");
                }
                return Ok(icategoryRepo.Delete(id));
            }
            catch
            {
                return Problem("something went wrong");
            }
        }
    }
}
