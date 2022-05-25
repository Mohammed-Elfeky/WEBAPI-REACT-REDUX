import { useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import {addCategory} from '../../REDUX/CAT/slice'
import Joi from "joi";
import {nameSchema,descSchema} from '../../validation/cateogry'
const CatFormAdd = () => {
    
    const dispatch=useDispatch()
    const err=useSelector(({catState:{err}})=>err)

    const[name,setName]= useState([])
    const[desc,setDesc]= useState([])
    const[img,setImg]= useState(null)

    const[nameErr,setNameErr]= useState('')
    const[descErr,setDescErr]= useState('')
    const[imgErr,setImgErr]= useState('')
    
    
    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const descChange=(e)=>{
        setDesc(e.target.value)        
    }
    const imgChange=(e)=>{
        let form=new FormData()
        form.append("image",e.target.files[0],e.target.files[0].name)
        setImg(form)        
    }

    const whenSubmmit=()=>{

        // if(nameSchema.validate({name:name}).error){
        //     setNameErr(nameSchema.validate({name:name}).error.message)
        //     return
        // } 
        // setNameErr('')

        // if(descSchema.validate({desc:desc}).error){
        //     setDescErr(descSchema.validate({desc:desc}).error.message)
        //     return
        // }
        // setDescErr('')

        // if(!img){
        //     setImgErr("the img is required")
        //     return
        // }
        // setImgErr('')

        // console.log("sadsdas")


        dispatch(addCategory(
            {
                name,
                desc,
                img
            }
        ))
    }
    return (
        <>
            <div>
                <input onChange={nameChange} type="text" />
                <br />
                <small>{nameErr}</small>
                <br />
                <input onChange={descChange} type="text" />
                <br />
                <small>{descErr}</small>
                <br />
                <input onChange={imgChange} type="file"  />
                <br />
                <small>{imgErr}</small>
                <br />
                <button onClick={whenSubmmit}>add</button>
                <h1>{err}</h1>
            </div>
        </>
    );
}

export default CatFormAdd;