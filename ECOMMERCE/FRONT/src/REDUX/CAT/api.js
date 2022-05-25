import axios from "axios";
import { base } from "../../THEBASE/URL.js";
const catBase=`${base}/Category`
export const addCat=async(cat)=>{
    return await axios.post(catBase,cat);
}
export const getCatWithId=async(cat_id)=>{
    return await axios.get(`${catBase}/${cat_id}`);
}
export const getCats=async()=>{
    return await axios.get(catBase);
}
export const updateCat=async(id,cat)=>{
    return await axios.put(`${catBase}/${id}`,cat);
}