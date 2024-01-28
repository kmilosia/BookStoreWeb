import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    checkoutCart: [],
    isElectronicPurchase: false,
    deliveryAddress: null,
    invoiceAddress: null,
    discount: null,
    deliveryMethod: null,
    paymentMethod: null,
    guest: null,
    guestData: null,
    checkoutErrors: null,
    totalPrice: 0,
}
const checkoutSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        resetCheckout: (state, action) => {
            let cart = localStorage.getItem("cart")
            cart = cart ? JSON.parse(cart) : []
            state.checkoutCart = cart
            state.totalPrice = calculateTotalAmount()
            state.isElectronicPurchase = checkElectronicCart()
            state.deliveryAddress = null
            state.invoiceAddress = null
            state.discount = null
            state.deliveryMethod = null
            state.paymentMethod = null
            state.guest = null
            state.guestData = null
            state.checkoutErrors = null
          },
        setGuestData: (state, action) => {
            state.guestData = action.payload
        },
        setGuest: (state, action) => {
            state.guest = action.payload
        },
        setPaymentMethod: (state, action) => {
            state.paymentMethod = action.payload
        },
        setDeliveryMethod: (state, action) => {
            state.deliveryMethod = action.payload
        },
        setDiscount: (state, action) => {
            state.discount = action.payload
        },
        setInvoiceAddress: (state, action) => {
            state.invoiceAddress = action.payload
        },
        setDeliveryAddress: (state, action) => {
            state.deliveryAddress = action.payload
        },
        setCheckoutCart: (state, action) => {
            state.checkoutCart = action.payload
        },
        setCheckoutErrors: (state, action) => {
            state.checkoutErrors = action.payload
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload
        }
    },
})
const checkElectronicCart = () => {
    let cart = localStorage.getItem("cart")
    cart = cart ? JSON.parse(cart) : []
    const bool = cart.some((item) => item.formId === 1)
    return (!bool)
}
const calculateTotalAmount = () => {
    let cart = localStorage.getItem("cart")
    cart = cart ? JSON.parse(cart) : []
    return cart.reduce((total, item) => {
      const priceToUse = item.discountedBruttoPrice !== 0 ? item.discountedBruttoPrice : item.price;
      return total + item.quantity * priceToUse;
    }, 0);
}
export const { setCheckoutCart,setDeliveryAddress,setInvoiceAddress,setDiscount,setPaymentMethod,setDeliveryMethod,setGuest,setGuestData,resetCheckout, setCheckoutErrors,setTotalPrice } = checkoutSlice.actions
export default checkoutSlice.reducer