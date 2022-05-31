import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../REDUX/AUTH/slice";

const AdminLinks = () => {
    const name= useSelector(({authState:{userInfo:{name}}})=>name)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(signOut())
    }
    return (
        <>
            <li class="nav-item">
                <Link class="nav-link" to="/products">products</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/cats">cats</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/Orders">orders</Link>
            </li>
            <li class="nav-item" style={{ marginLeft:"auto"}}>
                <Link class="nav-link" to="/Orders" >{name}</Link>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link" onClick={handleClick}>signOut</a>
            </li>
        </>
    );
}

export default AdminLinks;