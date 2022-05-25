import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addProduct, getProductById } from './api';
import { uploadImage } from '../../commonApis/imageUpload';
import { updateProduct } from './api';

const initialState = {
    product: null,
    products: null
};

export const addProductAction = createAsyncThunk(
    'product/add',
    async ({product,img}) => {

        //submit data
        let { data } = await addProduct(product)

        //upload image
        await uploadImage(data.id, "product",img)

        return data;
    }
);

export const EditProductAction = createAsyncThunk(
    'product/edit',
    async ({id,product,img}) => {

        //submit data
        let { data } = await updateProduct(id,product)

        if(img){
            //upload image
            await uploadImage(data.id, "product",img)
        }

        return data;
    }
);

export const getProductAction = createAsyncThunk(
    'product/get',
    async (id) => {
        let { data } = await getProductById(id)
        return data;
    }
);



export const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(addProductAction.fulfilled, (state,{payload}) => {
                state.product = payload;
            })
            .addCase(addProductAction.rejected, (state, { payload }) => {
                console.log("redirect to error page")
            })
            .addCase(EditProductAction.fulfilled, (state,{payload}) => {
                state.product = payload;
            })
            .addCase(EditProductAction.rejected, (state, { payload }) => {
                console.log("redirect to error page")
            })
            .addCase(getProductAction.fulfilled, (state,{payload}) => {
                state.product = payload;
            })
            .addCase(getProductAction.rejected, (state, { payload }) => {
                console.log("redirect to error page")
            })
    },
});

export default productSlice.reducer;