import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: false,
  reducers: {
    toggle(state) {
      return !state;
    },
  },
});

export const menuActions = menuSlice.actions;
export default menuSlice.reducer;
