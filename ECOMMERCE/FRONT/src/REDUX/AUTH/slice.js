import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signIn, signUp } from './api';
import { decoder } from '../../HELPERS/decoder';

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
            const { data } = await signIn(user)
            return data;
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
        }
    }
    ,
    extraReducers: (builder) => {
        builder
            .addCase(signUpAction.fulfilled, (state) => {
                console.log("redirect to sign in")
                state.signUpError = null
            })
            .addCase(signUpAction.rejected, (state, { payload }) => {
                state.signUpError = payload
            })
            .addCase(signInAction.fulfilled, (state, { payload: { token } }) => {
                localStorage.setItem("user", token)
                state.user = token;
                state.userInfo=decoder(token)
                state.signInError = null;
            })
            .addCase(signInAction.rejected, (state, { payload }) => {
                state.signInError = payload;
            })
    },
});
export const { signOut } = authSlice.actions
export default authSlice.reducer;