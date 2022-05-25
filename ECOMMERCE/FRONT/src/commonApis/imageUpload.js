import { base } from "../THEBASE/URL";
import axios from "axios";

export const uploadImage=async(id,type,img)=>{
    return await axios.post(`${base}/Upload/${id}/${type}`,img);
}