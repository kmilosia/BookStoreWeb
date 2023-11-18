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
            state.token = null
            state.userData = null
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
        }) .addCase(registerUser.pending,(state)=>{
            state.loading = true
            state.success = false
        }) .addCase(registerUser.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.loading = false
            state.error = 'Nieudana rejestracja! Sprawdź czy wpisane dane są prawidłowe!' 
        })
        .addCase(fetchUserData.pending,(state)=>{
            state.loading = true
            state.success = false
        })
        .addCase(fetchUserData.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
            state.userData = action.payload
        })
        .addCase(fetchUserData.rejected,(state,action)=>{
            state.loading = false
            state.error = 'Nie można pobrać danych użytkownika!' 
        })
    }
})
export const { logout } = userSlice.actions;
export default userSlice.reducer
