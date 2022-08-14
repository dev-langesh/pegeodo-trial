import { createSlice } from "@reduxjs/toolkit";

const accountSlideSlice = createSlice({
  name: "account sidebar",
  initialState: { value: false },
  reducers: {
    openAccountBar: (state) => {
      state.value = true;
    },
    closeAccountBar: (state) => {
      state.value = false;
    },
  },
});

export const { openAccountBar, closeAccountBar } = accountSlideSlice.actions;

export default accountSlideSlice.reducer;

export const accountSideBarState = (state) => state.accountSideBar.value;
