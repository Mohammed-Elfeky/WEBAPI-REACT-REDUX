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
            <div className=" w-25 mx-auto my-5 ">
                <input className="form-control mb-3"  placeholder="name" name="UserName" onChange={handleChange} type="text" />
                <input className="form-control mb-3"  placeholder="password"  name="Password" onChange={handleChange} type="password" />
                <small className="text-danger my-1 d-block">{signInError}</small>
                <button className=" btn btn-dark"  onClick={whenSubmmit}>signIn</button>
            </div>
        </>
    );
}

export default SignIn;