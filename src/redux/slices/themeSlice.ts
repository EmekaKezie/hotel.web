import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    onToggleExploreDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { onToggleExploreDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
