using ECOMMERCE.models;
using System.Collections.Generic;
using System.Linq;
namespace ECOMMERCE.repos
{
    public class categoryRepo : IcategoryRepo
    {
        private readonly context context;

        public categoryRepo(context context)
        {
            this.context = context;
        }
        public List<Category> GetAll()
        {
            return context.categories.ToList();
        }
        public Category FindById(int id)
        {
            return context.categories.Where(p => p.Id == id).SingleOrDefault();
        }
        public Category add(Category category)
        {
            context.categories.Add(category);
            context.SaveChanges();
            return category;
        }
        public Category Edit(int id, Category category)
        {
            Category oldCategory = FindById(id);
            if (oldCategory != null)
            {
                oldCategory.Name = category.Name;
                oldCategory.Description = category.Description;
                context.SaveChanges();
                return oldCategory;
            }
            return null;
        }
        public int Delete(int id)
        {
            Category category = FindById(id);
            context.categories.Remove(category);
            return context.SaveChanges();
        }
        public bool FindByName(string name)
        {
            return context.categories.Any(p => p.Name == name);
        }
    }
}
