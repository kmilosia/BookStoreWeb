import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlist: [],
        quantity: null,
        totalPrice: null,
    },
    reducers: {
        addItem:(state, action) =>{
           const wishlistItem = state.wishlist.find((item)=> item.id === action.payload.id)
           if(!wishlistItem){
            state.wishlist.push({...action.payload})
            state.quantity++
            state.totalPrice = state.totalPrice + action.payload.price
           }
        },
        removeItem: (state, action) => {
            const removeItem = state.wishlist.filter((item) => item.id !== action.payload.id)
            state.wishlist = removeItem
            state.quantity--
            state.totalPrice = state.totalPrice - action.payload.price
          },
        emptyWishlist: (state, action) => {
          state.wishlist = []
          state.quantity = null
          state.totalPrice = null
        },
    },
})

export const { addItem, removeItem, emptyWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
