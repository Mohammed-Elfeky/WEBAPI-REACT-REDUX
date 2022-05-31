import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersAction } from "../../REDUX/CART/slice";
import Order from "./Order";
const Orders = () => {
    const dispatch = useDispatch()
    const orders = useSelector(({ cartState: { orders } }) => orders)
    useEffect(() => {
        dispatch(getAllOrdersAction())
    }, [])
    return (
        <div className=" p-5">
            {orders?.map((order) => <Order key={order.id}  {...order} />)}
        </div>
    );
}

export default Orders;