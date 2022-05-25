using ECOMMERCE.models;
using System.Collections.Generic;

namespace ECOMMERCE.repos
{
    public interface IcategoryRepo
    {
        Category add(Category category);
        int Delete(int id);
        Category Edit(int id, Category category);
        Category FindById(int id);
        List<Category> GetAll();
        bool FindByName(string name);
    }
}