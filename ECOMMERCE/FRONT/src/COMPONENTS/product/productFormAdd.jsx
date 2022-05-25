import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllCats } from '../../REDUX/CAT/slice'
import { addProductAction } from "../../REDUX/PRODUCT/slice";
import Joi from "joi";
import { nameSchema, descSchema } from '../../validation/cateogry'
const ProductFormAdd = () => {

    const dispatch = useDispatch()
    const cats = useSelector(({ catState: { cats } }) => cats)

    const [name, setName] = useState([])
    const [desc, setDesc] = useState([])
    const [img, setImg] = useState(null)
    const [price, setPrice] = useState(null)
    const [cat, setcat] = useState(null)



    const [nameErr, setNameErr] = useState('')
    const [descErr, setDescErr] = useState('')
    const [imgErr, setImgErr] = useState('')
    const [priceErr, setPriceErr] = useState(null)
    const [catErr, setCatErr] = useState(null)

    const nameChange = (e) => {
        setName(e.target.value)
    }
    const descChange = (e) => {
        setDesc(e.target.value)
    }
    const imgChange = (e) => {
        let form = new FormData()
        form.append("image", e.target.files[0], e.target.files[0].name)
        setImg(form)
    }
    const priceChange = (e) => {
        setPrice(e.target.value)
    }
    const catChange=(e)=>{
        setcat(e.target.value)
    }

    useEffect(() => {
        dispatch(getAllCats())
    }, [])



    const whenSubmmit = () => {

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


        dispatch(addProductAction(
            {
                product:{
                    name,
                    description:desc,
                    categoryId:+cat,
                    price:+price
                },
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
                <input onChange={imgChange} type="file" />
                <br />
                <small>{imgErr}</small>
                <br />
                <input type="number" onChange={priceChange} />
                <br />
                <small>{priceErr}</small>
                <br />
                <select name="" id="" onChange={catChange}>

                    {
                        cats?.map(({ id, name }) => {
                            return <option key={id} value={id}>{name}</option>
                        }
                        )
                    }
                </select>
                <br />
                <small>{catErr}</small>
                <br />
                <button onClick={whenSubmmit}>add</button>
            </div>
        </>
    );
}

export default ProductFormAdd;