import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    showMessage: false,
    messageTitle: '',
}
const loginPopupSlice = createSlice({
    name: 'loginPopup',
    initialState,
    reducers: {
        showMessage: (state, action) => {
            state.showMessage = true;
            state.messageTitle = action.payload.title;
          },
          hideMessage: (state) => {
            state.showMessage = false;
            state.messageTitle = '';
          },
    },

})
export const { showMessage, hideMessage } = loginPopupSlice.actions
export default loginPopupSlice.reducer
