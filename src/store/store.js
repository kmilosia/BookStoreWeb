import { configureStore } from "@reduxjs/toolkit";
import userSlice, { authMiddleware } from './userSlice'
import navSlice from "./navSlice";
import { cartSlice } from "./cartSlice";

const store = configureStore({
    reducer:{
        user: userSlice,
        nav: navSlice,
        cart: cartSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
})

export default store