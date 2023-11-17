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
        return request.data
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state,action) => {
            state.auth = false
            state.token = null
            localStorage.removeItem('token')
        },
        addToken: (state, action) => {
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
                state.token = JSON.parse(storedToken);
            }
        },
    },
    extraReducers:(builder) => {
        builder.addCase(loginUser.pending,(state)=>{
            state.loading = true
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.auth = true
            state.loading = false
            state.token = action.payload
            console.log(action.payload);
            localStorage.setItem('token',JSON.stringify(action.payload))
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading = false
            if(state.error === 'Request failed with status code 400'){
                state.error = 'Nieprawidłowe dane logowania!'
            }else{
            state.error = action.error.message        
            }    
        })
    }
})

export default userSlice.reducer
