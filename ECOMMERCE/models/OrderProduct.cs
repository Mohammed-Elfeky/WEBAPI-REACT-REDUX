using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace ECOMMERCE.models
{
    public class OrderProduct
    {
        [ForeignKey("order")]
        public int o_Id { get; set; }
        [ForeignKey("Product")]
        public int p_Id { get; set; }
        public int quantity { get; set; }
        public virtual Order order { set; get; }
        public virtual Product Product { set; get; }

    }
}
