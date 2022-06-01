import { useState } from "react";
import { catSchema } from "../validation/cateogry";
import { useDispatch, useSelector } from "react-redux"
import { addCategory } from '../REDUX/CAT/slice'

const useValidator=(initform,initformError,schema)=>{


    const [formState, setFormState] = useState(initform)
    const [formErrorsState, setFormErrorsState] = useState(initformError)
    
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
        const res = schema.validate(formState)//=====>>>>>
        if(res.error){
            setFormErrorsState({
                ...initformError,
                [res.error.details[0].path[0]]:res.error.message
            })
            return 0;
        }
        setFormErrorsState(initformError)
        return 1
    }
    return{
        whenSubmmit,
        handleChange,
        formErrorsState,
        formState,
        setFormState
    }
}
export default useValidator;