import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addCategory, editCat, getCatById } from '../../REDUX/CAT/slice'
import { catSchemaEdit } from '../../validation/cateogry'
import { useParams } from "react-router-dom";
const initformErrorsState={
    name: "",
    description: ""
}
const initformState= {
    name: "",
    description: ""
}
const CatFormEdit = () => {

    const dispatch = useDispatch()
    const cat = useSelector(({ catState: { cat } }) => cat)
    const { id } = useParams()

    const [formState, setFormState] = useState(initformState)
    const [formErrorsState, setFormErrorsState] = useState(initformErrorsState)

    useEffect(() => {
        dispatch(getCatById(id))
    }, [])

    useEffect(() => {
        if (cat) {
            setFormState({name:cat.name,description:cat.description})
        }
    }, [cat])

    const handleChange = ({ target: { name, value} }) => {
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const whenSubmmit = () => {

        const res = catSchemaEdit.validate(formState)
        if(res.error){
            setFormErrorsState({
                ...initformErrorsState,
                [res.error.details[0].path[0]]:res.error.message
            })
            return;
        }
        setFormErrorsState(initformErrorsState)
        dispatch(editCat(
            {
                id: id,
                catObj:formState
            }
        ))
    }
    return (
        <>
            <div className=" w-25 mx-auto my-5 ">
                <input className="form-control mb-3" name="name" value={formState.name} onChange={handleChange} type="text" />
                <small className="text-danger my-1 d-block">{formErrorsState.name}</small>
                <input className="form-control mb-3" name="description" value={formState.description} onChange={handleChange} type="text" />
                <small  className="text-danger my-1 d-block">{formErrorsState.description}</small>
                <button className=" btn btn-dark my-3" onClick={whenSubmmit}>edit</button>
            </div>
        </>
    );
}

export default CatFormEdit;