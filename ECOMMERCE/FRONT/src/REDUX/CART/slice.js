import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { addToCart, calcCartTotal, prepareToUseInHelper, removeFromCart, saveCartToStorage } from '../../HELPERS/cart';
import { navigator } from '../../HELPERS/navigator';


// {
//     p_Id: 15,
//     quantity: 5,
//     price:50
// }
const storedCart = localStorage.getItem("cart") ?
    JSON.parse(localStorage.getItem("cart")) :
    {
        address: "",
        date: "",
        u_id: "",
        total: 0,
        orderProducts: [

        ]
    }

const initialState = {
    cart: storedCart
};





// export const getCatById = createAsyncThunk(
//     'cat/get',
//     async (id, thunkAPI) => {
//         try {
//             let { data } = await getCatWithId(id)
//             return data;
//         } catch ({ response: { status } }) {
//             return thunkAPI.rejectWithValue(status)
//         }
//     }
// );







export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, { payload }) {
            const products = prepareToUseInHelper(current(state.cart.orderProducts))

            state.cart.orderProducts = addToCart(products, payload)
            state.cart.total = calcCartTotal(products)
            saveCartToStorage(state.cart)
        },
        remove(state, { payload }) {
            const products = prepareToUseInHelper(current(state.cart.orderProducts))
            removeFromCart(products, payload)
            state.cart.orderProducts = removeFromCart(products, payload)
            // state.cart.total = calcCartTotal(products)
            // saveCartToStorage(state.cart)
        }
    }
});
export const { add,remove } = cartSlice.actions;
export default cartSlice.reducer;