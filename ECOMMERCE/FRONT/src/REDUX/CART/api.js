import axios from "axios";
import { base } from "../../THEBASE/URL.js";
const orderBase = `${base}/Order`


export const submmitOrder = async (cart) => {
    console.log("orderBase")
    return await axios.post(orderBase, cart);
}
