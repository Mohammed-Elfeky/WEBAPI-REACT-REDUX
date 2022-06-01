import { useDispatch } from "react-redux";
import { searchVal } from "../../REDUX/PRODUCT/slice";
const Search = () => {
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        dispatch(searchVal(e.target.value))
    }
    return (
        <>
            <div class="input-group mb-3">
                <input onChange={handleChange} type="text" class="form-control" placeholder="write the product name" aria-label="Username" aria-describedby="basic-addon1" />
                <span class="input-group-text" id="basic-addon1">
                    <i class="fas fa-search"></i>
                </span>
            </div>
        </>
    );
}

export default Search;