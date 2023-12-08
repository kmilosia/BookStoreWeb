import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    showCartPopup: false,
    product: null,
}
const cartPopupSlice = createSlice({
    name: 'cartPopup',
    initialState,
    reducers: {
        showPopup: (state, action) => {
            state.showCartPopup = true
            state.product = action.payload
          },
          hidePopup: (state) => {
            state.showCartPopup = false
            state.product = null
          },
    },

})
export const { showPopup, hidePopup } = cartPopupSlice.actions
export default cartPopupSlice.reducer