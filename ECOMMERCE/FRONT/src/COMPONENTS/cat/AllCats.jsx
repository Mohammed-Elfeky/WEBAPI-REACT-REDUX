import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllCats } from "../../REDUX/CAT/slice";
import { staticBase } from "../../THEBASE/URL";
import { Link } from "react-router-dom";
const AllCats = () => {
    const dispatch = useDispatch()
    const cats = useSelector(({ catState: { cats } }) => cats)

    useEffect(() => {
        dispatch(getAllCats())
    }, [])

    return (
        <>
        <Link to="/add-cat">add</Link>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">category</th>
                        <th scope="col">description</th>
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
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
    );
}

export default AllCats;