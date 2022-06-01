import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProductsAction } from "../../REDUX/PRODUCT/slice";
import Product from "./Product";
import Search from "../../COMPONENTS/other/Search";
import { searchProduuct } from "../../HELPERS/search";
const AllUserProducts = () => {
    const dispatch = useDispatch()
    
    let products = useSelector(({ productState: { products } }) => products)
    let searched = useSelector(({ productState: { searched } }) => searched)

    let showProducts=products?.map((product)=><Product key={product.id} {...product} />)
    let showSearchedProducts=searched?.map((product)=><Product key={product.id} {...product} />)

    useEffect(() => {
        dispatch(getProductsAction())
    }, [])

    return (
        <div className="row justify-content-between p-5">
            <Search/>
            {
                searched ? showSearchedProducts : showProducts 
            }
        </div>
    );
}

export default AllUserProducts;