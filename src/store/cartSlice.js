import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalPrice: null,
        quantity: null,
        discountCode: null,
    },
    reducers: {
        addToCart:(state, action) =>{
           const cartItem = state.cart.find((item)=> item.id === action.payload.id)
           if(cartItem){
            cartItem.quantity++
           }else{
            state.cart.push({...action.payload, quantity: 1})
            state.totalPrice = state.totalPrice + action.payload.price
            state.quantity++
           }
        },
        incrementQuantity: (state, action)=>{
            const item = state.cart.find((item) => item.id === action.payload.id)
            item.quantity++
            state.totalPrice = state.totalPrice + action.payload.price
        },
        decrementQuantity: (state, action)=>{
            const item = state.cart.find((item) => item.id === action.payload.id)
            if (item.quantity === 1){
              item.quantity = 1
            } else {
              item.quantity--
              if(state.quantity === 0 || state.quantity === null){
                state.totalPrice = null
              }else{
              state.totalPrice = state.totalPrice - action.payload.price
              }
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id)
            state.cart = removeItem
            state.quantity--
            if(state.quantity === 0 || state.quantity === null){
              state.totalPrice = null
            }else{
            state.totalPrice = state.totalPrice - action.payload.price
            }
          },
          addDiscount: (state, action) => {
            state.discountCode =  action.payload
          },
        emptyCart: (state, action) => {
          state.cart = []
          state.totalPrice = null
          state.quantity =  null
          state.discountCode = null
        },
    },
})

export const { addToCart, incrementQuantity, decrementQuantity, removeItem, emptyCart,addDiscount } = cartSlice.actions
export default cartSlice.reducer
