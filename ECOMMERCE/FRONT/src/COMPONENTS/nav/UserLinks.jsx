import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../REDUX/AUTH/slice";
const UserLinks = () => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(signOut())
    }
    return (
        <>
            <li class="nav-item">
                <a href="#" class="nav-link" onClick={handleClick}>signOut</a>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/cart">cart</Link>
            </li>
        </>
    );
}

export default UserLinks;