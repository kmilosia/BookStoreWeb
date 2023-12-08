import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    showLoginMessage: false,
    loginMessageTitle: '',
}
const loginPopupSlice = createSlice({
    name: 'loginPopup',
    initialState,
    reducers: {
          showLoginMessage: (state, action) => {
            state.showLoginMessage = true;
            state.loginMessageTitle = action.payload.title;
          },
          hideLoginMessage: (state) => {
            state.showLoginMessage = false;
            state.loginMessageTitle = '';
          },
    },

})
export const { showLoginMessage, hideLoginMessage } = loginPopupSlice.actions
export default loginPopupSlice.reducer
