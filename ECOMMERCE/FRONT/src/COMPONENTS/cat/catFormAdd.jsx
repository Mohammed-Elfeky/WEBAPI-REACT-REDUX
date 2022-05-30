import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addCategory } from '../../REDUX/CAT/slice'
import { catSchema} from '../../validation/cateogry'
const initformErrorsState={
    name: "",
    description: "",
    img: ""
}
const initformState= {
    name: "",
    description: "",
    img: null
}
const CatFormAdd = () => {

    const dispatch = useDispatch()
    const err = useSelector(({ catState: { err } }) => err)

    const [formState, setFormState] = useState(initformState)
    const [formErrorsState, setFormErrorsState] = useState(initformErrorsState)
    
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
        const res = catSchema.validate(formState)
        if(res.error){
            setFormErrorsState({
                ...initformErrorsState,
                [res.error.details[0].path[0]]:res.error.message
            })
            return;
        }
        setFormErrorsState(initformErrorsState)
        dispatch(addCategory(formState))
    }
    return (
        <>
            <div className=" w-25 mx-auto my-5 ">
                <input className="form-control mb-3"  placeholder="name" name="name" onChange={handleChange} type="text" />
                <small className="text-danger my-1 d-block">{formErrorsState.name}</small>
                <input className="form-control mb-3"  placeholder="description" name="description" onChange={handleChange} type="text" />
                <small className="text-danger my-1 d-block">{formErrorsState.description}</small>
                <input className="form-control" name="img" onChange={handleChange} type="file" />
                <small className="text-danger my-1 d-block">{formErrorsState.img}</small>
                <button className=" btn btn-dark my-3" onClick={whenSubmmit}>add</button>
                <small className="text-danger my-1 d-block">{err}</small>
            </div>
        </>
    );
}

export default CatFormAdd;