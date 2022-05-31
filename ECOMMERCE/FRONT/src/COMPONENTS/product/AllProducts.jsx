import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { staticBase } from "../../THEBASE/URL";
import { getProductsAction } from "../../REDUX/PRODUCT/slice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { showModal } from "../../REDUX/Modal/slice";
import TheModal from "../../COMPONENTS/other/TheModal"
const AllProducts = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const products = useSelector(({ productState: { products } }) => products)
  const user = useSelector(({ authState: { user } }) => user)
  const userInfo = useSelector(({ authState: { userInfo } }) => userInfo)

  useEffect(() => {
    dispatch(getProductsAction())
  }, [])

  if (!user) {
    navigate("/signIn")
    return;
  }

  if (userInfo?.role !== "Admin") navigate("/")

  const handleDelete = (id) => {
    dispatch(showModal({ type: "product", id }))
  }

  return (
    <div className="p-5">
      <Link className=" btn btn-dark my-5" to="/add-product">add</Link>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">product</th>
            <th scope="col">description</th>
            <th scope="col">price</th>
          </tr>
        </thead>
        <tbody>
          {
            products?.map(({ id, name, description, img, price }) => {
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{description}</td>
                  <td>{price}</td>
                  <td>
                    <img style={{ width: "70px" }} src={`${staticBase}/images/${img}`} alt="" srcset="" />
                  </td>
                  <td>
                    <Link class="nav-link" to={`/edit-product/${id}`}>edit</Link>
                  </td>
                  <a href="#" class="nav-link" onClick={() => handleDelete(id)}>
                    <i class="fa-solid fa-trash"></i>
                  </a>
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

export default AllProducts;