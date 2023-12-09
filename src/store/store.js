import { configureStore } from "@reduxjs/toolkit";
import userSlice, { authMiddleware } from './userSlice'
import navSlice from "./navSlice";
import  cartSlice, { subscribeToStore }  from "./cartSlice";
import cartPopupSlice from "./cartPopupSlice";
import messageSlice from "./messageSlice";
import loginPopupSlice from "./loginPopupSlice";
import checkoutSlice, { subscribeToStoreCheckout } from "./checkoutSlice";

const store = configureStore({
    reducer:{
        user: userSlice,
        nav: navSlice,
        cart: cartSlice,
        cartPopup: cartPopupSlice,
        message: messageSlice,
        loginPopup: loginPopupSlice,
        checkout: checkoutSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
})
subscribeToStore(store)
subscribeToStoreCheckout(store)

export default store