import { configureStore } from '@reduxjs/toolkit';
import  catReducer  from '../CAT/slice';
import  productReducer  from '../PRODUCT/slice';

export const store = configureStore({
  reducer: {
    catState: catReducer,
    productState:productReducer
  },
});
