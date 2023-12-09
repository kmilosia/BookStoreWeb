import { createSlice } from "@reduxjs/toolkit";

const loadCheckoutFromLocalStorage = () => {
  const checkout = JSON.parse(localStorage.getItem("checkout")) || {};
  return checkout;
}

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: loadCheckoutFromLocalStorage(),
  reducers: {
    setOrderAuth: (state,action) => {
      if (action.payload) {
        state.orderAuth = action.payload;
      } else {
        delete state.orderAuth;
      }
      localStorage.setItem("checkout", JSON.stringify(state));
    },
    setDiscount: (state, action) => {
      if (action.payload) {
        state.discount = action.payload;
      } else {
        delete state.discount;
      }
      localStorage.setItem("checkout", JSON.stringify(state));
    },
    setPayment: (state, action) => {
      if (action.payload) {
        state.payment = action.payload;
      } else {
        delete state.payment;
      }
      localStorage.setItem("checkout", JSON.stringify(state));
    },
    setDelivery: (state, action) => {
      if (action.payload) {
        state.delivery = action.payload;
      } else {
        delete state.delivery;
      }
      localStorage.setItem("checkout", JSON.stringify(state));
    },
    setUserData: (state, action) => {
      if (action.payload) {
        state.userData = action.payload;
      } else {
        delete state.userData;
      }
      localStorage.setItem("checkout", JSON.stringify(state));
    },
  }
})

const { actions } = checkoutSlice;
const { setDiscount, setPayment, setDelivery, setUserData, setOrderAuth } = actions;

const subscribeToStoreCheckout = (store) => {
  store.subscribe(() => {
    const state = store.getState().checkout;
    localStorage.setItem("checkout", JSON.stringify(state));
  });
}

export { setDiscount, setPayment, setDelivery, setUserData,setOrderAuth, subscribeToStoreCheckout };
export default checkoutSlice.reducer;
