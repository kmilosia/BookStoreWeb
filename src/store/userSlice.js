import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../utils/api/axiosClient";
import { getValidToken } from "../utils/functions/getValidToken";

const initialState = {
    loading:false,
    error:null,
    isAuth: false,
    success: false,
    userData: null,
    userAddress: null,
}
export const checkTokenValidity = async (token) => {
    try {
        const request = await axiosClient.post(`Account/CheckTokenValidity?token=${token}`);
        return request.data === 'Valid';
    } catch (error) {
      console.error(error.response.data)
      return false;
    }
  }
export const checkUserLogin = createAsyncThunk(
    'user/auth',
    async () => {
      const rawToken = localStorage.getItem('token');
      if (rawToken) {
        const token = rawToken.replace(/^"|"$/g, '');
        const isLogged = await checkTokenValidity(token);
        return isLogged;
      } else {
        return false;
      }
    }
  );
export const loginUser = createAsyncThunk(
    'user/login',
    async(userCredentials) => {
        try{
            const response = await axiosClient.post('/Account/login', userCredentials)
            return response.data    
        }catch(error){
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data;
                throw new Error(errorMessage);
              } else {
                throw error;
              }
        }
    }
)
export const registerUser = createAsyncThunk(
    'user/register',
    async(userCredentials) => {
        try{
            const response = await axiosClient.post('Account/registration',userCredentials)
            return response.data    
        }catch(error){
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data;
                throw new Error(errorMessage);
              } else {
                throw error;
              }
        }
    }
)
export const fetchUserData = createAsyncThunk(
    'user/data',
    async() => {
        try{
        const token = getValidToken()
        const response = await axiosClient.get('User/Data',{
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })
        return response.data
        }catch(error){
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data;
                throw new Error(errorMessage);
              } else {
                throw error;
              }
        }
    }
)
export const fetchUserAddress = createAsyncThunk(
    'user/address',
    async() => {
        try{
        const token = getValidToken()
        const response = await axiosClient.get('User/Data-Address',{
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })
        return response.data
        }catch(error){
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data;
                throw new Error(errorMessage);
              } else {
                throw error;
              }
        }
    }
)
export const resetPasswordEmail = createAsyncThunk(
    'user/resetPasswordEmail',
    async(data) => {
        try{
            const response = await axiosClient.post('/Account/ForgotPassword', data)
            return response.data    
        }catch(error){
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data;
                throw new Error(errorMessage);
              } else {
                throw error;
              }
        }
    }
)
export const resetPassword = createAsyncThunk(
    'user/resetPassword',
    async(data) => {
        try{
            const response = await axiosClient.post('/Account/ResetPassword', data)
            return response.data    
        }catch(error){
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data;
                throw new Error(errorMessage);
              } else {
                throw error;
              }
        }
    }
)
export const createCustomer = createAsyncThunk(
    'user/createCustomer',
    async({data,id}) => {
        try{
            const response = await axiosClient.post(`/Account/CreateCustomerData?userId=${id}`, data)
            return response.data    
        }catch(error){
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data;
                throw new Error(errorMessage);
              } else {
                throw error;
              }
        }
    }
)
export const editUserData = createAsyncThunk(
    'user/editData',
    async(data) => {
        try{
        const token = getValidToken()
        const response = await axiosClient.put('/User/Edit-Data', data, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })
        return response.data
        }catch(error){
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data;
                throw new Error(errorMessage);
              } else {
                throw error;
              }
        }
    }
)
export const changePassword = createAsyncThunk(
    'user/changePassword',
    async(data) => {
        try{
        const token = getValidToken()
        const response = await axiosClient.put('/User/Edit-Password', data,{
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })
        return response.data
        }catch(error){
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data;
                throw new Error(errorMessage);
              } else {
                throw error;
              }
        }
    }
)
export const deleteAccount = createAsyncThunk(
    'user/delete',
    async() => {
        try{
        const token = getValidToken()
        const response = await axiosClient.delete('/User/Deactivate',{
        headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })
        return response.data
        }catch(error){
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data;
                throw new Error(errorMessage);
              } else {
                throw error;
              }
        }
    }
)
export const signNewsletter = createAsyncThunk(
    'user/signNewsletter',
    async(email) => {
        try{
            const response = await axiosClient.post(`/Newsletter/Add-New-Subscriber?email=${email}` )
            return response.data    
        }catch(error){
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data;
                throw new Error(errorMessage);
              } else {
                throw error;
              }
        }
    }
)
export const sendContactMessage = createAsyncThunk(
    'user/contactMessage',
    async(data) => {
        try{
            const response = await axiosClient.post('/Contact', data)
            return response.data    
        }catch(error){
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data;
                throw new Error(errorMessage);
              } else {
                throw error;
              }
        }
    }
)
export const addUserAddress = createAsyncThunk(
    'user/addAddress',
    async(data) => {
        try{
        const token = getValidToken()
        const response = await axiosClient.post('/User/Edit-Address-Data', data, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })
        return response.data
        }catch(error){
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data;
                throw new Error(errorMessage);
              } else {
                throw error;
              }
        }
    }
)
export const authMiddleware = (store) => (next) => (action) => {
    if (action.type === 'user/logout') {
      localStorage.removeItem('token')
    } else if (loginUser.fulfilled.match(action)) {
      const token = action.payload;
      localStorage.setItem('token', JSON.stringify(token));
    }else if (deleteAccount.fulfilled.match(action)) {
        localStorage.removeItem('token')
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
            state.userData = null
            state.userAddress = null
            state.error = null
        },
        resetState: (state,action) => {
            state.success = false
            state.error = null
        }
    },
    extraReducers:(builder) => {
        builder.addCase(loginUser.pending,(state)=>{
            state.loading = true
        }).addCase(loginUser.fulfilled,(state,action)=>{
            state.isAuth = true
            state.loading = false
            state.error = null
        }).addCase(loginUser.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        }).addCase(registerUser.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(registerUser.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
            state.error = null
        }).addCase(registerUser.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        }).addCase(fetchUserData.pending,(state)=>{
            state.loading = true
        }).addCase(fetchUserData.fulfilled,(state,action)=>{
            state.loading = false
            state.userData = action.payload
            state.error = null
        }).addCase(fetchUserData.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        }).addCase(fetchUserAddress.pending,(state)=>{
            state.loading = true
        }).addCase(fetchUserAddress.fulfilled,(state,action)=>{
            state.loading = false
            state.userAddress = action.payload
            state.error = null
        }).addCase(fetchUserAddress.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        }).addCase(resetPasswordEmail.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(resetPasswordEmail.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
            state.error = null
        }).addCase(resetPasswordEmail.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        }).addCase(resetPassword.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(resetPassword.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
            state.error = null
        }).addCase(resetPassword.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        }).addCase(checkUserLogin.fulfilled, (state, action) => {
            state.isAuth = action.payload;
            state.error = null
        }).addCase(createCustomer.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(createCustomer.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
            state.error = null
        }).addCase(createCustomer.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        }).addCase(deleteAccount.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(deleteAccount.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
            state.isAuth = false
            state.userData = null
            state.error = null
        }).addCase(deleteAccount.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        }).addCase(editUserData.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(editUserData.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
            state.error = null
        }).addCase(editUserData.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        }).addCase(addUserAddress.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(addUserAddress.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
            state.error = null
        }).addCase(addUserAddress.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        }).addCase(changePassword.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(changePassword.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
            state.error = null
        }).addCase(changePassword.rejected,(state,action)=>{
            state.loading = false
            state.error = "Nie udało się zmienić hasła.Sprawdź czy wprowadzone dane są prawidłowe!"
        }).addCase(signNewsletter.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(signNewsletter.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
            state.error = null
        }).addCase(signNewsletter.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        }).addCase(sendContactMessage.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(sendContactMessage.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
            state.error = null
        }).addCase(sendContactMessage.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})
export const { logout, resetState } = userSlice.actions
export default userSlice.reducer
