import { configureStore } from "@reduxjs/toolkit";
import userSlice, { authMiddleware } from './userSlice'
import navSlice from "./navSlice";
import  cartSlice  from "./cartSlice";
import cartPopupSlice from "./cartPopupSlice";
import wishlistSlice from "./wishlistSlice";

const store = configureStore({
    reducer:{
        user: userSlice,
        nav: navSlice,
        cart: cartSlice,
        wishlist: wishlistSlice,
        cartPopup: cartPopupSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
})

export default store