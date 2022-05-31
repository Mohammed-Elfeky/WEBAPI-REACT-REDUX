import axios from "axios";
import { base } from "../../THEBASE/URL.js";
const orderBase = `${base}/Order`

const user=localStorage.getItem("user")
const config = {
    headers: { Authorization: `Bearer ${user}` }
};


export const submmitOrder = async (cart) => {
    return await axios.post(orderBase, cart,config);
}
export const getAllOrders = async () => {
    return await axios.get(orderBase,config);
}
