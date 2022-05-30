import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { signUpAction } from "../../REDUX/AUTH/slice";
import { validateSignUp } from "../../validation/auth";

const initformErrorsState = {
    UserName: "",
    Password: "",
    ConfirmPassword: ""
}
const initformState = {
    UserName: "",
    Password: "",
    ConfirmPassword: ""
}

const SignUp = () => {

    const dispatch = useDispatch()
    const signUpErr = useSelector(({ authState: { signUpError } }) => signUpError)

    const [formState, setFormState] = useState(initformState)
    const [formErrorsState, setFormErrorsState] = useState(initformErrorsState)


    const handleChange = ({ target: { name, value } }) => {
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const whenSubmmit = () => {
       const errors=validateSignUp(formState)
       if(errors){
           setFormErrorsState({
               ...initformErrorsState,
               [errors.field]:errors.err
           })
           return
       }
       setFormErrorsState(initformErrorsState)
       dispatch(signUpAction(formState))
    }


    return (
        <>
            <div className=" w-25 mx-auto my-5 ">
                <input className="form-control mb-3" name="UserName" placeholder="name" onChange={handleChange} type="text" />
                <small className="text-danger my-1 d-block">{formErrorsState.UserName}</small>
                <input className="form-control mb-3" name="Password" placeholder="password" onChange={handleChange} type="password" />
                <small className="text-danger my-1 d-block">{formErrorsState.Password}</small>
                <input className="form-control mb-3" name="ConfirmPassword" placeholder="confirm password" onChange={handleChange} type="password" />
                <small className="text-danger my-1 d-block">{formErrorsState.ConfirmPassword}</small>
                <button className=" btn btn-dark" onClick={whenSubmmit}>signUp</button>
                <small className="text-danger my-1 d-block">{signUpErr}</small>
            </div>
        </>
    );
}

export default SignUp;