import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../utils/api/axiosClient";

const initialState = {
    loading:false,
    token:null,
    error:null,
    auth: false,
}

export const loginUser = createAsyncThunk(
    'user/login',
    async(userCredentials) => {
        const request = await axiosClient.post('/Account/login', userCredentials)
        const response = await request.data.data
        return response
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state,action) => {
            state.token = null
            localStorage.clear()
        },
        addToken:(state,action) => {
            state.token = localStorage.getItem('token')
        },
    },
    extraReducers:(builder) => {
        builder.addCase(loginUser.pending,(state)=>{
            state.loading = true
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.loading = false
            state.token = action.payload
            localStorage.setItem('token',JSON.stringify(action.payload))
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message            
        })
    }
})

export default userSlice.reducer
