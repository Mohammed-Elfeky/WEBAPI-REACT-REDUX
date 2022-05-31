import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminLinks from "./AdminLinks";
import UnKnownLinks from "./UnknownLinks";
import UserLinks from "./UserLinks";
const Nav = () => {
    const user = useSelector(({ authState: { userInfo } }) => userInfo)
    let links;
    if(!user) links=<UnKnownLinks/>
    if(user&&user.role) links = <AdminLinks/>; 
    if(user&& !user.role) links = <UserLinks/>;
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav w-100">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">products</Link>
                        </li>
                        {links}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;