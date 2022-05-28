import { Link } from "react-router-dom";
import { signOut } from "../../REDUX/AUTH/slice";
import { useDispatch } from "react-redux";
const Nav = () => {
    const dispatch=useDispatch()
    const handleClick=()=>{
        dispatch(signOut())
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/cats">cats</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/signUp">signUp</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/signIn">signIn</Link>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" onClick={handleClick}>signOut</a>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/userProducts">user products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/cart">cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;