using ECOMMERCE.models;
using System.Collections.Generic;

namespace ECOMMERCE.repos
{
    public interface IproductRepo
    {
        Product add(Product p);
        int Delete(int id);
        Product Edit(int id, Product product);
        Product FindById(int id);
        List<Product> GetAll();
    }
}