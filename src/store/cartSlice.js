import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart:(state, action) =>{
           const cartItem = state.cart.find((item)=> item.id === action.payload.id)
           if(cartItem){
            cartItem.quantity++
           }else{
            state.cart.push({...action.payload, quantity: 1})
           }
        },
        incrementQuantity: (state, action)=>{
            const item = state.cart.find((item) => item.id === action.payload)
            item.quantity++
        },
        decrementQuantity: (state, action)=>{
            const item = state.cart.find((item) => item.id === action.payload)
            if (item.quantity === 1){
              item.quantity = 1
            } else {
              item.quantity--
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload)
            state.cart = removeItem
          },
    },
})

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions
export default cartSlice.reducer
