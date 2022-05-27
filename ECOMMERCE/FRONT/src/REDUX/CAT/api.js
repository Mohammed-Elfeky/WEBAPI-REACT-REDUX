import axios from "axios";
import { base } from "../../THEBASE/URL.js";
const catBase=`${base}/Category`

const user=localStorage.getItem("user")
const config = {
    headers: { Authorization: `Bearer ${user}` }
};

export const addCat=async(cat)=>{
    return await axios.post(catBase,cat,config);
}
export const getCatWithId=async(cat_id)=>{
    return await axios.get(`${catBase}/${cat_id}`,config);
}
export const getCats=async()=>{
    return await axios.get(catBase,config);
}
export const updateCat=async(id,cat)=>{
    return await axios.put(`${catBase}/${id}`,cat,config);
}