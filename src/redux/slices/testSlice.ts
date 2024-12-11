import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const testSlice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {
    onTestIncrement: (state) => {
      state.count += 1;
    },
    onTestDecrement: (state) => {
      state.count -= 1;
    },
    onTestReset: (state) => {
      state.count = 0;
    },
  },
});

export const { onTestIncrement, onTestDecrement, onTestReset } = testSlice.actions;
export default testSlice.reducer;
