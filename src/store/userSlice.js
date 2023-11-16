import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../utils/api/axiosClient";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(userCredentials) => {
        const request = await axiosClient.post('/user/login', userCredentials)
        const response = await request.data.data
        localStorage.setItem('token',JSON.stringify(response)) //token for all the API post calls so no user only token for each component call
        return response
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        loading:false,
        user:null,
        error:null,
    },
    extraReducers:(builder) => {
        builder.addCase(loginUser.pending,(state)=>{
            state.loading = true
            state.user = null
            state.error = null
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.loading = false
            state.user = action.payload
            state.error = null
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading = false
            state.user = null
            console.log(action.error.message);
            if(action.error.message === "Request failed with status code 401"){
                state.error = "Nieprawidłowe dane logowania!"
            }else{
                state.error = action.error.message
            }
            state.error = null
        })
    }
})
