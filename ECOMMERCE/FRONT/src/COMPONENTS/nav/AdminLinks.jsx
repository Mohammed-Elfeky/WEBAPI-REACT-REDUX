import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../REDUX/AUTH/slice";

const AdminLinks = () => {
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
                <Link class="nav-link" to="/">products</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/cats">cats</Link>
            </li>
        </>
    );
}

export default AdminLinks;