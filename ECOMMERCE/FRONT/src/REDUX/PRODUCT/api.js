import axios from "axios";
import { base } from "../../THEBASE/URL.js";
const productBase=`${base}/Product`

const user=localStorage.getItem("user")
const config = {
    headers: { Authorization: `Bearer ${user}` }
};

export const addProduct=async(Product)=>{
    return await axios.post(productBase,Product,config);
}
export const updateProduct=async(id,product)=>{
    return await axios.put(`${productBase}/${id}`,product,config);
}
export const getProductById=async(id)=>{
    return await axios.get(`${productBase}/${id}`);
}
export const getAllProducts=async()=>{
    return await axios.get(`${productBase}`);
}
export const deleteProduct=async(id)=>{
    return await axios.delete(`${productBase}/${id}`,config);
}