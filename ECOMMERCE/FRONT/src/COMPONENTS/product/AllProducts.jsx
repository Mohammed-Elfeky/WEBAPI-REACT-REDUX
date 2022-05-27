import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { staticBase } from "../../THEBASE/URL";
import { getProductsAction } from "../../REDUX/PRODUCT/slice"; 
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AllProducts = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  const products = useSelector(({ productState: { products } }) => products)
  const user = useSelector(({ authState: { user } }) => user)
  const userInfo = useSelector(({ authState: { userInfo } }) => userInfo)
  
  useEffect(() => {
    dispatch(getProductsAction())
  }, [])

  if(!user || userInfo.role!=="Admin") navigate("/signIn")

  return (
    <>
      <Link to="/add-product">add</Link>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">product</th>
            <th scope="col">description</th>
            <th scope="col">price</th>
          </tr>
        </thead>
        <tbody>
          {
            products?.map(({ id, name, description, img ,price}) => {
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
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </>
  );
}

export default AllProducts;