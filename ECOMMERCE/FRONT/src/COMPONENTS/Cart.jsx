import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add ,remove, removeProduct,submmitCart} from "../REDUX/CART/slice";
import { staticBase } from "../THEBASE/URL";
const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(({ cartState: { cart } }) => cart)
    

    const handlePlus=(product)=>{
        dispatch(add(product))
    }
    const handleRemove=(id)=>{
        dispatch(remove(id))
    }
    const handleDelete=(id)=>{
        dispatch(removeProduct(id))
    }
    const whenSubmit=()=>{
        dispatch(submmitCart(cart))
    }
    return (
        <section class="h-100" style={{ backgroundColor: "#eee" }}>
            <div class="container h-100 py-5">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-10">

                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
                            <div>
                                <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                                    class="fas fa-angle-down mt-1"></i></a></p>
                            </div>
                        </div>
                        {
                            cart.orderProducts?.map(({ p_Id, quantity, price, name, img }) => {
                                return (
                                    <div key={p_Id} class="card rounded-3 mb-4">
                                        <div class="card-body p-4">
                                            <div class="row d-flex justify-content-between align-items-center">
                                                <div class="col-md-2 col-lg-2 col-xl-2">
                                                    <img
                                                        src={`${staticBase}/images/${img}`}
                                                        class="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                </div>
                                                <div class="col-md-3 col-lg-3 col-xl-3">
                                                    <p class="lead fw-normal mb-2">{name}</p>
                                                    <p>price: <span class="text-muted">${price}</span></p>
                                                </div>
                                                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                    <button onClick={()=>handleRemove(p_Id)}  class="btn btn-link px-2"
                                                        >
                                                        <i class="fas fa-minus"></i>
                                                    </button>

                                                    <input id="form1" min="0" name="quantity" value={quantity} type="number"
                                                        class="form-control form-control-sm" />

                                                    <button onClick={()=>handlePlus({p_Id, quantity, price, name, img})} class="btn btn-link px-2">
                                                        <i  class="fas fa-plus"></i>
                                                    </button>
                                                </div>
                                                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                    <h5 class="mb-0">${price*quantity}</h5>
                                                </div>
                                                <div onClick={()=>handleDelete(p_Id)} class="col-md-1 col-lg-1 col-xl-1 text-end">
                                                    <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <button className="btn btn-success" onClick={whenSubmit}>submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;