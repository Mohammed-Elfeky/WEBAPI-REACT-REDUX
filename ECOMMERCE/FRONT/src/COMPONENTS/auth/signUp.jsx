import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { signUpAction } from "../../REDUX/AUTH/slice";


const SignUp = () => {

    const dispatch = useDispatch()
    const signUpErr = useSelector(({ authState: { signUpError } }) => signUpError)

    const [formState, setFormState] = useState({
        UserName: "",
        Password: "",
        ConfirmPassword:""
    })


    const handleChange = ({ target: { name, value} }) => {
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const whenSubmmit = () => {
        dispatch(signUpAction(formState))
    }


    return (
        <>
            <div>
                <input name="UserName" onChange={handleChange} type="text" />
                <br />
                {/* <small>{formErrorsState.name}</small> */}
                <br />
                <input  name="Password" onChange={handleChange} type="password" />
                <br />
                {/* <small>{formErrorsState.description}</small> */}
                <br />
                <input name="ConfirmPassword" onChange={handleChange} type="password" />
                <br />
                <small>{signUpErr}</small>
                <br />
                <button onClick={whenSubmmit}>add</button>
                <h1></h1>
            </div>
        </>
    );
}

export default SignUp;