import { Link } from "react-router-dom";
const UnKnownLinks = () => {
    return (
        <>
            <li class="nav-item" style={{ marginLeft:"auto"}}>
                <Link class="nav-link" to="/signUp">signUp</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/signIn">signIn</Link>
            </li>
        </>
    );
}

export default UnKnownLinks;