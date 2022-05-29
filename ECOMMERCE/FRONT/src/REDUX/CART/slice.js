import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import {
    addToCart,
    calcCartTotal,
    clearProduct,
    removeFromCart,
    saveCartToStorage,
    unState,
    initCart,
    assignU_idToOrder,
    clearCart
} from '../../HELPERS/cart';
import { navigator } from '../../HELPERS/navigator';
import { submmitOrder } from './api';




const initialState = {
    cart: initCart()
};


export const submmitCart = createAsyncThunk(
    'cart/submmit',
    async (cart, thunkAPI) => {
        try {
            const { authState: { userInfo: { id } } } = thunkAPI.getState()
            const order = assignU_idToOrder(cart, id)
            await submmitOrder(order)
        }  catch ({ response }) {
            return thunkAPI.rejectWithValue(response.status)
        }
    }
);



export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, { payload }) {

            let products = unState(current(state.cart.orderProducts))
            products = addToCart(products, payload)

            state.cart.orderProducts = products
            state.cart.order.total = calcCartTotal(products)
            saveCartToStorage(state.cart)

        },
        remove(state, { payload }) {

            let products = unState(current(state.cart.orderProducts))
            products = removeFromCart(products, payload)

            state.cart.orderProducts = products
            state.cart.order.total = calcCartTotal(products)
            saveCartToStorage(state.cart)

        },
        removeProduct(state, { payload }) {

            let products = unState(current(state.cart.orderProducts))
            products = clearProduct(products, payload)

            state.cart.orderProducts = products
            state.cart.order.total = calcCartTotal(products)
            saveCartToStorage(state.cart)

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(submmitCart.fulfilled, (state) => {
                state.cart=clearCart()
            })
            .addCase(submmitCart.rejected, (state, { payload }) => {
                navigator(payload || 401)
            })
    },
});
export const { add, remove, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;