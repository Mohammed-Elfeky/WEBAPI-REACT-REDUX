import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addCategory } from '../../REDUX/CAT/slice'
import Joi, { required } from "joi";
import { nameSchema, descSchema } from '../../validation/cateogry'
const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    description: Joi.string()
        .required(),
})

const CatFormAdd = () => {

    const dispatch = useDispatch()
    const err = useSelector(({ catState: { err } }) => err)

    const [formState, setFormState] = useState({
        name: "",
        description: "",
        img: null
    })
    const [formErrorsState, setFormErrorsState] = useState({
        name: "",
        description: "",
        img: null
    })



    const handleChange = ({ target: { name, value, type, files } }) => {
        if (type == "file") {
            let form = new FormData()
            form.append("image", files[0], files[0].name)
            setFormState({
                ...formState,
                [name]: form
            })
            return;
        }
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const whenSubmmit = () => {

        if (nameSchema.validate({ name: formState.name }).error) {
            setFormErrorsState({
                ...formErrorsState,
                name: nameSchema.validate({ name: formState.name }).error.message
            }
            )
            return
        }
        setNameErr('')

        if (descSchema.validate({ desc: formState.description }).error) {
            setDescErr(descSchema.validate({ desc: desc }).error.message)
            return
        }
        setDescErr('')

        if (!img) {
            setImgErr("the img is required")
            return
        }
        setImgErr('')

        alert("hi")
        // dispatch(addCategory(formState))
    }
    return (
        <>
            <div>
                <input name="name" onChange={handleChange} type="text" />
                <br />
                <small>{formErrorsState.name}</small>
                <br />
                <input name="description" onChange={handleChange} type="text" />
                <br />
                <small>{formErrorsState.description}</small>
                <br />
                <input name="img" onChange={handleChange} type="file" />
                <br />
                {/* <small>{imgErr}</small> */}
                <br />
                <button onClick={whenSubmmit}>add</button>
                <h1>{err}</h1>
            </div>
        </>
    );
}

export default CatFormAdd;