import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addCategory, editCat, getCatById } from '../../REDUX/CAT/slice'
import Joi from "joi";
import { nameSchema, descSchema } from '../../validation/cateogry'
const CatFormEdit = () => {

    const dispatch = useDispatch()
    const cat = useSelector(({ catState: { cat } }) => cat)

    useEffect(() => {
        dispatch(getCatById(6))
    }, [])
    useEffect(() => {
        if (cat) {
            setName(cat.name)
            setDesc(cat.description)
        }
    }, [cat])


    const [name, setName] = useState([])
    const [desc, setDesc] = useState([])
    const [img, setImg] = useState(null)

    const [nameErr, setNameErr] = useState('')
    const [descErr, setDescErr] = useState('')
    const [imgErr, setImgErr] = useState('')


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

        dispatch(editCat(
            {
                id: cat.id,
                catObj: {
                    name,
                    description: desc,
                }
            }
        ))
    }
    return (
        <>
            <div>
                <input value={name} onChange={nameChange} type="text" />
                <br />
                <small>{nameErr}</small>
                <br />
                <input value={desc} onChange={descChange} type="text" />
                <br />
                <small>{descErr}</small>
                <br />
                <button onClick={whenSubmmit}>add</button>
            </div>
        </>
    );
}

export default CatFormEdit;