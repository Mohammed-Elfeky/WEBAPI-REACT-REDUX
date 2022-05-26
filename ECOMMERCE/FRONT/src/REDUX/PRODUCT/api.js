import axios from "axios";
import { base } from "../../THEBASE/URL.js";
const productBase=`${base}/Product`


export const addProduct=async(Product)=>{
    return await axios.post(productBase,Product);
}
export const updateProduct=async(id,product)=>{
    return await axios.put(`${productBase}/${id}`,product);
}
export const getProductById=async(id)=>{
    return await axios.get(`${productBase}/${id}`);
}
export const getAllProducts=async()=>{
    return await axios.get(`${productBase}`);
}