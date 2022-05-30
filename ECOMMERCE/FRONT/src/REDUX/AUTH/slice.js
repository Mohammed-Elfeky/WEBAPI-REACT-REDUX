import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signIn, signUp } from './api';
import { decoder } from '../../HELPERS/decoder';
import { navigator } from '../../HELPERS/navigator';

const token = localStorage.getItem("user") ? localStorage.getItem("user") : null
const initialState = {
    user: token,
    userInfo: token ? decoder(token) : null,
    signUpError: null,
    signInError: null
};


export const signUpAction = createAsyncThunk(
    'user/signUp',
    async (user, thunkAPI) => {
        try {
            await signUp(user)
        } catch ({ response: { data } }) {
            return thunkAPI.rejectWithValue(data[0].description)
        }
    }
);

export const signInAction = createAsyncThunk(
    'user/signIn',
    async (user, thunkAPI) => {
        try {
            const { data,status } = await signIn(user)
            return {data,status};
        } catch ({ response: { data } }) {
            return thunkAPI.rejectWithValue(data)
        }
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signOut(state, action) {
            state.user = null;
            state.userInfo=null;
            localStorage.removeItem("user")
            navigator(200)
        }
    }
    ,
    extraReducers: (builder) => {
        builder
            .addCase(signUpAction.fulfilled, (state) => {
                navigator(401)
                state.signUpError = null
            })
            .addCase(signUpAction.rejected, (state, { payload }) => {
                state.signUpError = payload
            })
            .addCase(signInAction.fulfilled, (state, { payload: { data:{token},status } }) => {
                localStorage.setItem("user", token)
                state.user = token;
                state.userInfo=decoder(token)
                state.signInError = null;
                navigator(status)
            })
            .addCase(signInAction.rejected, (state, { payload }) => {
                state.signInError = payload;
            })
    },
});
export const { signOut } = authSlice.actions
export default authSlice.reducer;