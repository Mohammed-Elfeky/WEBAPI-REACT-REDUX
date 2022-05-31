import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllCats } from "../../REDUX/CAT/slice";
import { staticBase } from "../../THEBASE/URL";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TheModal from "../other/TheModal";
import { showModal } from "../../REDUX/Modal/slice";

const AllCats = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const cats = useSelector(({ catState: { cats } }) => cats)
    const user = useSelector(({ authState: { user } }) => user)
    const userInfo = useSelector(({ authState: { userInfo } }) => userInfo)

    useEffect(() => {
        dispatch(getAllCats())
    }, [])

    if (!user) {
        navigate("/signIn")
        return;
    }
    
    if (userInfo?.role !== "Admin") navigate("/")

    const handleDelete = (id) => {
        dispatch(showModal({ type: "cat", id }))
    }

    return (
        <div className="p-5">
            <Link className=" btn btn-dark my-3" to="/add-cat">add</Link>
            <table class="table  table-hover">
                <thead>
                    <tr>
                        <th scope="col">category</th>
                        <th scope="col">description</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cats?.map(({ id, name, description, img }) => {
                            return (
                                <tr key={id}>
                                    <td>{name}</td>
                                    <td>{description}</td>
                                    <td>
                                        <img style={{ width: "70px" }} src={`${staticBase}/images/${img}`} alt="" srcset="" />
                                    </td>
                                    <td>
                                        <Link class="nav-link" to={`/edit-cat/${id}`}>edit</Link>
                                    </td>
                                    <td>
                                        <a href="#" class="nav-link" onClick={() => handleDelete(id)}>
                                            <i class="fa-solid fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <TheModal />
        </div>
    );
}

export default AllCats;