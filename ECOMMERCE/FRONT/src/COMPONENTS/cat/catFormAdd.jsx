import { useDispatch, useSelector } from "react-redux"
import { addCategory } from '../../REDUX/CAT/slice'
import { catSchema} from '../../validation/cateogry'
import useValidator from '../../customHoocks/useValidator'
import { initCatformState,initCatformErrorsState } from "../../HELPERS/initialStates";

const CatFormAdd = () => {
    const {
        whenSubmmit,
        handleChange,
        formErrorsState,
        formState
    }=useValidator(initCatformState,initCatformErrorsState,catSchema)
    
    const dispatch = useDispatch()
    const err = useSelector(({ catState: { err } }) => err)

    const whenSubmmitCat=()=>{
        const submmit=whenSubmmit()
        if(!submmit) return;
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
                <button className=" btn btn-dark my-3" onClick={whenSubmmitCat}>add</button>
                <small className="text-danger my-1 d-block">{err}</small>
            </div>
        </>
    );
}

export default CatFormAdd;