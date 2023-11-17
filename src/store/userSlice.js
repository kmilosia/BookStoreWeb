import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../utils/api/axiosClient";

const initialState = {
    loading:false,
    token:null,
    error:null,
    isAuth: false,
}

export const loginUser = createAsyncThunk(
    'user/login',
    async(userCredentials) => {
        const request = await axiosClient.post('/Account/login', userCredentials)
        return request.data
    }
)
export const authMiddleware = (store) => (next) => (action) => {
    if (action.type === 'user/logout') {
      localStorage.removeItem('token')
    } else if (loginUser.fulfilled.match(action)) {
      const token = action.payload;
      localStorage.setItem('token', JSON.stringify(token));
    }
  
    return next(action);
  }

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state,action) => {
            state.isAuth = false
            state.token = null
        },
    },
    extraReducers:(builder) => {
        builder.addCase(loginUser.pending,(state)=>{
            state.loading = true
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.isAuth = true
            state.loading = false
            state.token = action.payload
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading = false
            state.error = 'Nieprawidłowe dane logowania!' 
        })
    }
})
export const { logout } = userSlice.actions;
export default userSlice.reducer
