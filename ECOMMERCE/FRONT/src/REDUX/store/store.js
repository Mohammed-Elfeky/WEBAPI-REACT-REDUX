import { configureStore } from '@reduxjs/toolkit';
import  catReducer  from '../CAT/slice';
import  productReducer  from '../PRODUCT/slice';
import authReducer from '../AUTH/slice'
import cartReducer from '../CART/slice'
export const store = configureStore({
  reducer: {
    catState: catReducer,
    productState:productReducer,
    authState:authReducer,
    cartState:cartReducer
  },
});
