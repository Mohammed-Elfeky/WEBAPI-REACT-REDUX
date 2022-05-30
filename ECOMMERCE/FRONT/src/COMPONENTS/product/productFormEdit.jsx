import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllCats } from '../../REDUX/CAT/slice'
import { addProductAction, EditProductAction, getProductAction } from "../../REDUX/PRODUCT/slice";
import { useParams } from "react-router-dom";
import { productEditSchema } from "../../validation/product"
const initformErrorsState = {
    name: "",
    description: "",
    category: "",
    price: "",
    img: ""
}
const initformState = {
    name: "",
    description: "",
    category: "",
    price: "",
    img: null
}
const ProductFormEdit = () => {

    const dispatch = useDispatch()
    const cats = useSelector(({ catState: { cats } }) => cats)
    const theProduct = useSelector(({ productState: { product } }) => product)
    const { id } = useParams()

    const [formState, setFormState] = useState(initformState)
    const [formErrorsState, setFormErrorsState] = useState(initformErrorsState)

    useEffect(() => {
        dispatch(getAllCats())
        dispatch(getProductAction(id))
    }, [])

    useEffect(() => {
        if (theProduct) {
            setFormState({
                name: theProduct.name,
                description: theProduct.description,
                price: theProduct.price,
                img: null,
                category: theProduct.categoryId
            })
        }
    }, [theProduct])


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
        console.log("sdad");
        const res = productEditSchema.validate(formState)
        if (res.error) {
            setFormErrorsState({
                ...initformErrorsState,
                [res.error.details[0].path[0]]: res.error.message
            })
            return;
        }
        setFormErrorsState(initformErrorsState)
      
        dispatch(EditProductAction(
            {
                id:theProduct.id,
                product:{
                    name:formState.name,
                    description:formState.description,
                    categoryId:+formState.category,
                    price:+formState.price
                },
                img:formState.img
            }
        ))
    }
    return (
        <>
            <div className=" w-25 mx-auto my-5 ">
                <input value={formState.name} placeholder="name" className="form-control mb-3" name="name" onChange={handleChange} type="text" />
                <small className="text-danger my-1 d-block">{formErrorsState.name}</small>
                <input value={formState.description} placeholder="description" className="form-control mb-3" name="description" onChange={handleChange} type="text" />
                <small className="text-danger my-1 d-block">{formErrorsState.description}</small>
                <input  placeholder="name" className="form-control mb-3" name="img" onChange={handleChange} type="file" />
                <input value={formState.price} placeholder="price" className="form-control mb-3" name="price" type="number" onChange={handleChange} />
                <small className="text-danger my-1 d-block">{formErrorsState.price}</small>
                <select value={formState.category} class="form-select" name="category" id="" onChange={handleChange}>
                    {
                        cats?.map(({ id, name }) => {
                            return <option key={id} value={id}>{name}</option>
                        }
                        )
                    }
                </select>
                <small className="text-danger my-1 d-block">{formErrorsState.category}</small>
                <button className=" btn btn-dark my-3" onClick={whenSubmmit}>edit</button>
            </div>
        </>
    );
}

export default ProductFormEdit;