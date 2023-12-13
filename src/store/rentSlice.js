import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    rentProduct: {},
    rentalModal: false,
}
const rentSlice = createSlice({
    name: 'rent',
    initialState,
    reducers: {
        addRentBook: (state, action) => {
            state.rentProduct = action.payload
            state.rentalModal = true
          },
          emptyRent: (state) => {
            state.rentProduct = {}
          },
          showRentalModal: (state) => {
            state.rentalModal = true
          },
          closeRentalModal: (state) => {
            state.rentalModal = false
            state.rentProduct = {}
          },
    },
})
export const { addRentBook,emptyRent,showRentalModal,closeRentalModal } = rentSlice.actions
export default rentSlice.reducer