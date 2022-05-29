import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { signInAction } from "../../REDUX/AUTH/slice";


const SignIn = () => {

    const dispatch = useDispatch()
    const signInError = useSelector(({ authState: { signInError } }) => signInError)
    

    const [formState, setFormState] = useState({
        UserName: "",
        Password: "",
    })


    const handleChange = ({ target: { name, value} }) => {
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const whenSubmmit = () => {
        dispatch(signInAction(formState))
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
                <small>{signInError}</small>
                <br />
                <button onClick={whenSubmmit}>add</button>
                <h1></h1>
            </div>
        </>
    );
}

export default SignIn;