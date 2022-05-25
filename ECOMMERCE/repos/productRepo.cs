using ECOMMERCE.models;
using System.Collections.Generic;
using System.Linq;
namespace ECOMMERCE.repos
{
    public class productRepo : IproductRepo
    {
        private readonly context context;

        public productRepo(context context)
        {
            this.context = context;
        }
        public List<Product> GetAll()
        {

            return context.products.ToList();
        }
        public Product FindById(int id)
        {
            return context.products.Where(p => p.Id == id).SingleOrDefault();
        }
        public Product add(Product p)
        {
            context.products.Add(p);
            context.SaveChanges();
            return p;
        }
        public Product Edit(int id, Product product)
        {
            Product oldProduct = FindById(id);
            if (oldProduct != null)
            {
                oldProduct.Name = product.Name;
                oldProduct.Description = product.Description;
                oldProduct.Price = product.Price;
                oldProduct.CategoryId = product.CategoryId;
                context.SaveChanges();
                return oldProduct;
            }
            return null;
        }
        public int Delete(int id)
        {
            Product product = FindById(id);
            context.products.Remove(product);
            return context.SaveChanges();
        }
    }
}
