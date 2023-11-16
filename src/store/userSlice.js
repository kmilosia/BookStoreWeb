import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(userCredentials) => {
        const request = await axios.post(``)
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        loading:false,
        user:null,
        error:null,
    }
})
