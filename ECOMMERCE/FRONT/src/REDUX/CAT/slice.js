import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCat, getCats, getCatWithId, updateCat } from './api'
import { uploadImage } from '../../commonApis/imageUpload';
import { navigator } from '../../HELPERS/navigator';
const initialState = {
    err: null,
    cat: null,
    cats: null
};


export const addCategory = createAsyncThunk(
    'cat/add',
    async ({ name, description, img }, thunkAPI) => {
        try {

            //submit data
            let { data } = await addCat({ name, description })

            //upload image
            await uploadImage(data.id, "cat", img)

            return data;
        } catch ({ response: { data, status } }) {
            return thunkAPI.rejectWithValue({ data, status })
        }
    }
);


export const getCatById = createAsyncThunk(
    'cat/get',
    async (id,thunkAPI) => {
        try {
            let { data } = await getCatWithId(id)
            return data;
        } catch ({ response: { status } }) {
            return thunkAPI.rejectWithValue(status)
        }
    }
);

export const getAllCats = createAsyncThunk(
    'cat/getAll',
    async (test="",thunkAPI) => {
        try {
            let { data } = await getCats()
            return data;
        } catch ({ response:{status}}) {
            return thunkAPI.rejectWithValue(status)
        }
    }
);

export const editCat = createAsyncThunk(
    'cat/edit',
    async ({ id, catObj }, thunkAPI) => {
        try {
            await updateCat(id, catObj)
        } catch ({ response: { status } }) {
            return thunkAPI.rejectWithValue(status)
        }
    }
);



export const catSlice = createSlice({
    name: 'cat',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(addCategory.fulfilled, (state) => {
                state.err = null;
            })
            .addCase(addCategory.rejected, (state, { payload }) => {
                if (payload.status !== 400) {
                    navigator(payload.status)
                    return;
                }
                state.err = payload.data;
            })
            .addCase(getCatById.fulfilled, (state, { payload }) => {
                state.cat = payload;
            })
            .addCase(getCatById.rejected, (state, { payload }) => {
                console.log("redirect to error page")
            })
            .addCase(getAllCats.fulfilled, (state, { payload }) => {
                state.cats = payload;
            })
            .addCase(getAllCats.rejected, (state, {payload}) => {
                navigator(payload)
            })
            .addCase(editCat.fulfilled, () => {
                console.log("redirect to index")
            })
            .addCase(editCat.rejected, (state, { payload }) => {
                navigator(payload)
            })
    },
});

export default catSlice.reducer;