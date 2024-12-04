/* eslint-disable no-unused-vars */
import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user : null,
    isError : false,
    isSuccess : false,
    isLoading : false,
    message : ""
}

export const LoginNonUser = createAsyncThunk("user/LoginNonUser",async(user,thunkAPI) =>{

    try {
        
        const response = await axios.post("http://localhost:1221/api/login",{

            email : user.email,
            password : user.password

        });

        return response.data;

    } catch (error) {
        if (error.response) {
            const message = error.response.data.message;
            return thunkAPI.rejectWithValue(message);
        }
    }

});

export const getMe = createAsyncThunk("user/getMe",async(_,thunkAPI) =>{

    try {
        
        const response = await axios.post("http://localhost:1221/api/me");

        return response.data;

    } catch (error) {
        if (error.response) {
            const message = error.response.data.message;
            return thunkAPI.rejectWithValue(message);
        }
    }

});

export const LogOut = createAsyncThunk("user/LogOut",async() =>{

    await axios.delete("http://localhost:1221/logout");

});

export const authSlice2 = createSlice({

    name : "auth",
    initialState,
    reducers :{
        reset : (state) => initialState
    },
    extraReducers : (builder) =>{

        builder.addCase(LoginNonUser.pending, (state) => {
            state.isLoading = true;
            // state.isError = false;
            // state.isSuccess = false;
        });

        builder.addCase(LoginNonUser.fulfilled, (state,action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isSuccess = true;
        });

        builder.addCase(LoginNonUser.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        builder.addCase(getMe.pending, (state) => {
            state.isLoading = true;
            // state.isError = false;
            // state.isSuccess = false;
        });

        builder.addCase(getMe.fulfilled, (state,action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isSuccess = true;
        });

        builder.addCase(getMe.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

    }

});

export const {reset} = authSlice2.actions;
export default authSlice2.reducer;
