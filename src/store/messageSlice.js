import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    showMessage: false,
    messageTitle: '',
}
const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        showMessage: (state, action) => {
            state.showMessage = true
            state.messageTitle = action.payload.title
          },
          hideMessage: (state) => {
            state.showMessage = false
            state.messageTitle = ''
          },
    },
})
export const { showMessage, hideMessage } = messageSlice.actions
export default messageSlice.reducer
