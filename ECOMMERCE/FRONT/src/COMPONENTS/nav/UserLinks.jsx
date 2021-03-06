import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../REDUX/AUTH/slice";
import { useSelector } from "react-redux";
const UserLinks = () => {
    const name = useSelector(({ authState: { userInfo: { name } } }) => name)
    const products = useSelector(({ cartState: { cart: { orderProducts } } }) => orderProducts)

    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(signOut())
    }
    return (
        <>
            <li class="nav-item">
                <Link class="nav-link" to="/cart">cart</Link>
            </li>
            <li class="nav-item" style={{ marginLeft: "auto" }}>
                <a href="#" class="nav-link" >
                    {products.length > 0 && products.length}
                    <i class="ml-4 fa-solid fa-cart-shopping"></i>
                </a>
            </li>
            <li class="nav-item" >
                <a class="nav-link " href="#">{name}</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link" onClick={handleClick}>signOut</a>
            </li>
        </>
    );
}

export default UserLinks;