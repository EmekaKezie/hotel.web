import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  bookingModal: false,
};

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    onBookingModal: (state, action: PayloadAction<boolean>) => {
      state.bookingModal = action.payload;
    },
  },
});

export const { onBookingModal } = homeSlice.actions;
export default homeSlice.reducer;
