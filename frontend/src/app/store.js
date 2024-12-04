/* eslint-disable no-unused-vars */
import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.js";
import authReducer2 from "../features/authSlice2.js";

export default configureStore({
    reducer: {
        auth : authReducer,
        auth_2 : authReducer2 
    }
});