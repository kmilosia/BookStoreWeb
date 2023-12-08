import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    showLoginMessage: false,
    loginMessageTitle: '',
}
const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
          showLoginMessage: (state, action) => {
            state.showLoginMessage = true
            state.loginMessageTitle = action.payload.title
          },
          hideLoginMessage: (state) => {
            state.showLoginMessage = false
            state.loginMessageTitle = ''
          },
    },
})
export const { showLoginMessage, hideLoginMessage } = checkoutSlice.actions
export default checkoutSlice.reducer
