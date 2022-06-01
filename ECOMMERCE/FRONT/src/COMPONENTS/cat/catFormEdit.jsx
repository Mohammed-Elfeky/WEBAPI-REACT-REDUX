import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addCategory, editCat, getCatById } from '../../REDUX/CAT/slice'
import { catSchemaEdit } from '../../validation/cateogry'
import { useParams } from "react-router-dom";
import useValidator from '../../customHoocks/useValidator'
import { initCatEditformState, initCatEditformErrorsState } from '../../HELPERS/initialStates'

const CatFormEdit = () => {
    const {
        whenSubmmit,
        handleChange,
        formErrorsState,
        formState,
        setFormState
    } = useValidator(initCatEditformState, initCatEditformErrorsState, catSchemaEdit)

    const dispatch = useDispatch()
    const cat = useSelector(({ catState: { cat } }) => cat)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getCatById(id))
    }, [])

    useEffect(() => {
        if (cat) {
            setFormState({ name: cat.name, description: cat.description })
        }
    }, [cat])

    const whenSubmmitEditCat = () => {
        const submmit = whenSubmmit()
        if (!submmit) return;
        dispatch(editCat(
            {
                id: id,
                catObj: formState
            }
        ))
    }
    
    return (
        <>
            <div className=" w-25 mx-auto my-5 ">
                <input className="form-control mb-3" name="name" value={formState.name} onChange={handleChange} type="text" />
                <small className="text-danger my-1 d-block">{formErrorsState.name}</small>
                <input className="form-control mb-3" name="description" value={formState.description} onChange={handleChange} type="text" />
                <small className="text-danger my-1 d-block">{formErrorsState.description}</small>
                <button className=" btn btn-dark my-3" onClick={whenSubmmitEditCat}>edit</button>
            </div>
        </>
    );
}

export default CatFormEdit;