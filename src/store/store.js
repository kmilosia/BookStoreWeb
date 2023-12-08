import { configureStore } from "@reduxjs/toolkit";
import userSlice, { authMiddleware } from './userSlice'
import navSlice from "./navSlice";
import  cartSlice, { subscribeToStore }  from "./cartSlice";
import cartPopupSlice from "./cartPopupSlice";
import messageSlice from "./messageSlice";
import loginPopupSlice from "./loginPopupSlice";

const store = configureStore({
    reducer:{
        user: userSlice,
        nav: navSlice,
        cart: cartSlice,
        cartPopup: cartPopupSlice,
        message: messageSlice,
        loginPopup: loginPopupSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
})
subscribeToStore(store)


export default store