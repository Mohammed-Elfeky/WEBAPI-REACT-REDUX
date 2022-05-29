import { staticBase } from "../../THEBASE/URL";
import { add } from "../../REDUX/CART/slice";
import { useDispatch } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Product = ({id,img,name,price}) => {
    const user = useSelector(({ authState: { userInfo } }) => userInfo)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleClick=()=>{
        if(!user){
            navigate("/signIn")
        }
        dispatch(add({p_Id:id,img,name,price}))
    }
    return (
        <div class="card mb-3" style={{width: "18rem"}}>
            <img src={`${staticBase}/images/${img}`} className="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">$ {price}</p>
                    <a href="#" class="btn btn-primary mb-2">Go somewhere</a>
                    <button onClick={handleClick} className=" btn btn-dark"> add to card</button>
                </div>
        </div>
    );
}

export default Product;