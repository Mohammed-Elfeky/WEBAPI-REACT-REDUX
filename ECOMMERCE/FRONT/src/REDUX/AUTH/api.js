import axios from "axios";
import { base } from "../../THEBASE/URL.js";
const AuthBase=`${base}/Account`


export const signUp=async(user)=>{
    return await axios.post(`${AuthBase}/signUp`,user);
}
export const signIn=async(user)=>{
    return await axios.post(`${AuthBase}/signIn`,user);
}

