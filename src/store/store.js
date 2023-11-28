import { configureStore } from "@reduxjs/toolkit";
import userSlice, { authMiddleware } from './userSlice'
import navSlice from "./navSlice";

const store = configureStore({
    reducer:{
        user: userSlice,
        nav: navSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
})

export default store