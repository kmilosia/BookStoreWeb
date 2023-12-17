import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    showMessage: false,
    messageTitle: '',
    messageType: '',
}
const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        showMessage: (state, action) => {
            state.showMessage = true
            state.messageTitle = action.payload.title
            state.messageType = action.payload.type
          },
          hideMessage: (state) => {
            state.showMessage = false
            state.messageTitle = ''
            state.messageType = ''
          },
    },
})
export const { showMessage, hideMessage } = messageSlice.actions
export default messageSlice.reducer
