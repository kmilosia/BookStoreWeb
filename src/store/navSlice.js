import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    searchModal: false,
    accountModal: false,
    navbar: false,
}
const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        showNavbar: (state) => {
            state.navbar = !state.navbar
        },
        showSearchModal: (state) => {
            state.accountModal = false
            state.searchModal = !state.searchModal
          },     
          showAccountModal: (state) => {
            state.searchModal = false
            state.accountModal = !state.accountModal
          },
          hideAll: (state) => {
            state.searchModal = false
            state.accountModal = false
          },
    },
})

export const { showSearchModal, showAccountModal, hideAll, showNavbar } = navSlice.actions
export default navSlice.reducer