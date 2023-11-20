import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../utils/api/axiosClient";
import axiosTokenClient from "../utils/api/axiosTokenClient";

const initialState = {
    loading:false,
    token:null,
    error:null,
    isAuth: false,
    success: false,
    userData: null,
    email: null,
}
export const loginUser = createAsyncThunk(
    'user/login',
    async(userCredentials) => {
        const request = await axiosClient.post('/Account/login', userCredentials)
        return request.data
    }
)
export const registerUser = createAsyncThunk(
    'user/register',
    async(userCredentials) => {
        const request = await axiosClient.post('Account/registration',userCredentials)
        return request.data
    }
)
export const fetchUserData = createAsyncThunk(
    'user/info',
    async() => {
        const response = await axiosTokenClient.get('User/info')
        return response.data
    }
)
export const resetPasswordEmail = createAsyncThunk(
    'user/resetPasswordEmail',
    async(data) => {
        const request = await axiosClient.post('/Account/ForgotPassword', data)
        return {email: data.email, responseData: request.data}
    }
)
export const resetPassword = createAsyncThunk(
    'user/resetPassword',
    async(data) => {
        const request = await axiosClient.post('/Account/ResetPassword', data)
        return request.data
    }
)
export const authMiddleware = (store) => (next) => (action) => {
    if (action.type === 'user/logout') {
      localStorage.removeItem('token')
      localStorage.setItem('isAuth', 'false')
    } else if (loginUser.fulfilled.match(action)) {
      const token = action.payload;
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('isAuth', 'true');
    }
    return next(action);
  }

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state,action) => {
            state.isAuth = false
            state.success = false
            state.token = null
            state.userData = null
            state.error = null
        },
        resetState: (state,action) => {
            state.success = false
            state.error = false
            state.isAuth = false
        }
    },
    extraReducers:(builder) => {
        builder.addCase(loginUser.pending,(state)=>{
            state.loading = true
        }).addCase(loginUser.fulfilled,(state,action)=>{
            state.isAuth = true
            state.loading = false
            state.token = action.payload
        }).addCase(loginUser.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        }).addCase(registerUser.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(registerUser.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
        }).addCase(registerUser.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        }).addCase(fetchUserData.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(fetchUserData.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
            state.userData = action.payload
        }).addCase(fetchUserData.rejected,(state,action)=>{
            state.loading = false
            state.error = 'Nie można pobrać danych użytkownika!' 
        }).addCase(resetPasswordEmail.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(resetPasswordEmail.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
        }).addCase(resetPasswordEmail.rejected,(state,action)=>{
            state.loading = false
            state.error = 'Nie znaleziono podanego adresu email!' 
        }).addCase(resetPassword.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(resetPassword.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
        }).addCase(resetPassword.rejected,(state,action)=>{
            state.loading = false
            state.error = 'Nie udało się odzyskać hasła!' 
        })

    }
})
export const { logout, resetState } = userSlice.actions
export default userSlice.reducer
