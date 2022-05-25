using ECOMMERCE.models;
using System.Collections.Generic;
using System.Linq;
namespace ECOMMERCE.repos
{
    public class HelpersRepo : IHelpersRepo
    {
        private readonly context context;

        public HelpersRepo(context context)
        {
            this.context = context;
        }

        public void imgUploader(string table, int id, string img)
        {
            switch (table)
            {
                case "cat":
                    Category cat = context.categories.Where(cat => cat.Id == id).FirstOrDefault();
                    cat.img = img;
                    break;
                default:
                    Product product = context.products.Where(cat => cat.Id == id).FirstOrDefault();
                    product.img = img;
                    break;
            }
            context.SaveChanges();
        }


    }
}
