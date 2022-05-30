import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProductsAction } from "../../REDUX/PRODUCT/slice";
import Product from "./Product";
const AllUserProducts = () => {
    const dispatch = useDispatch()
    
    const products = useSelector(({ productState: { products } }) => products)

    useEffect(() => {
        dispatch(getProductsAction())
    }, [])

    return (
        <div className="row justify-content-between p-5">
            {products?.map((product)=><Product key={product.id} {...product} />)}
        </div>
    );
}

export default AllUserProducts;