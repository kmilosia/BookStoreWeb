import { configureStore } from "@reduxjs/toolkit";
import userSlice, { authMiddleware } from './userSlice'
import navSlice from "./navSlice";
import  cartSlice  from "./cartSlice";
import cartPopupSlice from "./cartPopupSlice";
import wishlistSlice from "./wishlistSlice";
import messageSlice from "./messageSlice";

const store = configureStore({
    reducer:{
        user: userSlice,
        nav: navSlice,
        cart: cartSlice,
        wishlist: wishlistSlice,
        cartPopup: cartPopupSlice,
        message: messageSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
})

export default store