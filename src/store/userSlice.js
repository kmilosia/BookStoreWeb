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
        const response = await axiosClient.post(`Account/CheckTokenValidity?token=${token}`);
        if(response.status === 200){
            return true
        }else{
            return false
        }
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
            console.log(error);
        }
    }
)
export const registerUser = createAsyncThunk(
    'user/register',
    async(userCredentials) => {
        try{
            const response = await axiosClient.post('Account/Register',userCredentials)
            return response.data    
        }catch(error){
            console.log(error);
        }
    }
)
export const fetchUserData = createAsyncThunk(
    'user/data',
    async() => {
        try{
        const token = getValidToken()
        const response = await axiosClient.get('User',{
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })
        return response.data
        }catch(error){
            console.log(error);
        }
    }
)
export const fetchUserAddress = createAsyncThunk(
    'user/address',
    async() => {
        try{
        const token = getValidToken()
        const response = await axiosClient.get('User/Address',{
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })
        return response.data
        }catch(error){
            console.log(error);
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
            console.log(error);
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
            console.log(error);
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
            console.log(error);
        }
    }
)
export const editUserData = createAsyncThunk(
    'user/editData',
    async(data) => {
        try{
        const token = getValidToken()
        const response = await axiosClient.put('/User', data, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })
        return response.data
        }catch(error){
            console.log(error);
        }
    }
)
export const changePassword = createAsyncThunk(
    'user/changePassword',
    async(data) => {
        try{
        const token = getValidToken()
        const response = await axiosClient.put('/User/Password', data,{
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })
        return response.data
        }catch(error){
            console.log(error);
        }
    }
)
export const deleteAccount = createAsyncThunk(
    'user/delete',
    async() => {
        try{
        const token = getValidToken()
        const response = await axiosClient.delete('/User',{
        headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })
        return response.data
        }catch(error){
            console.log(error);
        }
    }
)
export const signNewsletter = createAsyncThunk(
    'user/signNewsletter',
    async(email) => {
        try{
            const response = await axiosClient.post(`/Newsletter/Subscriber?email=${email}` )
            return response.data    
        }catch(error){
            console.log(error);
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
            console.log(error);
        }
    }
)
export const addUserAddress = createAsyncThunk(
    'user/addAddress',
    async(data) => {
        try{
        const token = getValidToken()
        const response = await axiosClient.post('/User/Address', data, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })
        return response.data
        }catch(error){
          console.log(error);
    }}
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
            state.error = "Błąd podczas logowania"
        }).addCase(registerUser.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(registerUser.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
            state.error = null
        }).addCase(registerUser.rejected,(state,action)=>{
            state.loading = false
            state.error = "Błąd podczas tworzenia konta. Sprawdź czy podany adres lub nazwa użytkownika nie jest już w naszym systemie"
        }).addCase(fetchUserData.pending,(state)=>{
            state.loading = true
        }).addCase(fetchUserData.fulfilled,(state,action)=>{
            state.loading = false
            state.userData = action.payload
            state.error = null
        }).addCase(fetchUserData.rejected,(state,action)=>{
            state.loading = false
            state.error = "Błąd podczas pobierania danych"
        }).addCase(fetchUserAddress.pending,(state)=>{
            state.loading = true
        }).addCase(fetchUserAddress.fulfilled,(state,action)=>{
            state.loading = false
            state.userAddress = action.payload
            state.error = null
        }).addCase(fetchUserAddress.rejected,(state,action)=>{
            state.loading = false
            state.error = "Błąd podczas pobierania danych"
        }).addCase(resetPasswordEmail.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(resetPasswordEmail.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
            state.error = null
        }).addCase(resetPasswordEmail.rejected,(state,action)=>{
            state.loading = false
            state.error = "Błąd podczas resetowania hasła. Spróbuj użyć innego hasła"
        }).addCase(resetPassword.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(resetPassword.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
            state.error = null
        }).addCase(resetPassword.rejected,(state,action)=>{
            state.loading = false
            state.error = "Błąd podczas resetowania hasła. Spróbuj użyć innego hasła"
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
            state.error = "Błąd podczas tworzenia konta. Sprawdź czy podany adres lub nazwa użytkownika nie jest już w naszym systemie"
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
            state.error = "Błąd podczas usuwania konta"
        }).addCase(editUserData.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(editUserData.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
            state.error = null
        }).addCase(editUserData.rejected,(state,action)=>{
            state.loading = false
            state.error = "Błąd podczas edytowania danych"
        }).addCase(addUserAddress.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(addUserAddress.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
            state.error = null
        }).addCase(addUserAddress.rejected,(state,action)=>{
            state.loading = false
            state.error = "Błąd podczas dodawania adresu użytkownika"
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
            state.error = "Błąd podczas rejestracji do newslettera. Sprawdź czy podany email nie jest już w naszym systemie"
        }).addCase(sendContactMessage.pending,(state)=>{
            state.loading = true
            state.success = false
        }).addCase(sendContactMessage.fulfilled,(state,action)=>{
            state.loading = false
            state.success = true
            state.error = null
        }).addCase(sendContactMessage.rejected,(state,action)=>{
            state.loading = false
            state.error = "Błąd przy wysyłaniu wiadomości"
        })
    }
})
export const { logout, resetState } = userSlice.actions
export default userSlice.reducer
