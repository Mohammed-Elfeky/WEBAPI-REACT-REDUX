import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllCats } from '../../REDUX/CAT/slice'
import { addProductAction } from "../../REDUX/PRODUCT/slice";
import {productSchema} from "../../validation/product"
const initformErrorsState = {
    name:"",
    description: "",
    category: "",
    price: "",
    img:""
}
const initformState = {
    name:"",
    description: "",
    category: "",
    price: "",
    img:null
}
const ProductFormAdd = () => {

    const dispatch = useDispatch()
    const cats = useSelector(({ catState: { cats } }) => cats)

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
        const res = productSchema.validate(formState)
        if(res.error){
            setFormErrorsState({
                ...initformErrorsState,
                [res.error.details[0].path[0]]:res.error.message
            })
            return;
        }
        setFormErrorsState(initformErrorsState)

        dispatch(addProductAction(
            {
                product: {
                    name:formState.name,
                    description: formState.description,
                    categoryId: +formState.category,
                    price: +formState.price
                },
                img:formState.img
            }
        ))
    }

    
    useEffect(() => {
        dispatch(getAllCats())
    }, [])




    return (
        <>
            <div className=" w-25 mx-auto my-5 ">
                <input   placeholder="name" className="form-control mb-3"name="name" onChange={handleChange} type="text" />
                <small className="text-danger my-1 d-block">{formErrorsState.name}</small>
                <input   placeholder="description" className="form-control mb-3"name="description" onChange={handleChange} type="text" />
                <small className="text-danger my-1 d-block">{formErrorsState.description}</small>
                <input   placeholder="name" className="form-control mb-3"name="img" onChange={handleChange} type="file" />
                <small className="text-danger my-1 d-block">{formErrorsState.img}</small>
                <input   placeholder="price" className="form-control mb-3"name="price" type="number" onChange={handleChange} />
                <small className="text-danger my-1 d-block">{formErrorsState.price}</small>
                <select class="form-select" name="category" id="" onChange={handleChange}>
                <option  >select the category</option>
                    {
                        cats?.map(({ id, name }) => {
                            return <option key={id} value={id}>{name}</option>
                        }
                        )
                    }
                </select>
                <small className="text-danger my-1 d-block">{formErrorsState.category}</small>
                <button className=" btn btn-dark my-3" onClick={whenSubmmit}>add</button>
            </div>
        </>
    );
}

export default ProductFormAdd;