import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addProduct, deleteProduct, getAllProducts, getProductById } from './api';
import { uploadImage } from '../../commonApis/imageUpload';
import { updateProduct } from './api';
import { navigator } from '../../HELPERS/navigator'
const initialState = {
    product: null,
    products: null
};

export const addProductAction = createAsyncThunk(
    'product/add',
    async ({ product, img }, thunkAPI) => {

        try {
            //submit data
            let { data } = await addProduct(product)

            //upload image
            await uploadImage(data.id, "product", img)

            return data;
        } catch ({ response: { status } }) {
            return thunkAPI.rejectWithValue( status )
        }
    }
);

export const EditProductAction = createAsyncThunk(
    'product/edit',
    async ({ id, product, img },thunkAPI) => {
        try {
            //submit data
            let res = await updateProduct(id, product)

            if (img) {
                //upload image
                await uploadImage(res.data.id, "product", img)
            }

            return {data:res.data,status:res.status};
        } catch ({ response: { status } }) {
            return thunkAPI.rejectWithValue( status )
        }
    }
);

export const getProductAction = createAsyncThunk(
    'product/get',
    async (id,thunkAPI) => {
        try {
            let { data } = await getProductById(id)
            return data;
        } catch ({ response: { status } }) {
            return thunkAPI.rejectWithValue( status )
        }
    }
);


export const getProductsAction = createAsyncThunk(
    'products/get',
    async () => {
        let { data } = await getAllProducts()
        return data;
    }
);

export const deleteProductsAction = createAsyncThunk(
    'products/delete',
    async (id,thunkAPI) => {
        try{
            let { status } = await deleteProduct(id)
            return status;
        }catch({response:{status}}){
           return thunkAPI.rejectWithValue(status)
        }
    }
);


export const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(addProductAction.fulfilled, (state, { payload }) => {
                state.product = payload;
                navigator("products")
            })
            .addCase(addProductAction.rejected, (state, { payload }) => {
                navigator(payload)
            })
            .addCase(EditProductAction.fulfilled, (state, { payload:{data,status} }) => {
                state.product = data;
                navigator("products")
            })
            .addCase(EditProductAction.rejected, (state, { payload }) => {
              navigator(payload)
            })
            .addCase(getProductAction.fulfilled, (state, { payload }) => {
                state.product = payload;
            })
            .addCase(getProductAction.rejected, (state, { payload }) => {
                navigator(payload)
            })
            .addCase(getProductsAction.fulfilled, (state, { payload }) => {
                state.products = payload;
            })
            .addCase(getProductsAction.rejected, (state, { payload }) => {
                navigator(500)
            })
            .addCase(deleteProductsAction.fulfilled, (state, { payload }) => {
                navigator("products")
            })
            .addCase(deleteProductsAction.rejected, (state, { payload }) => {
                navigator(payload)
            })
    },
});

export default productSlice.reducer;