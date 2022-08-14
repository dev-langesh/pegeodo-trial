import { createSlice } from "@reduxjs/toolkit";

const cartSlideSlice = createSlice({
  name: "cart slide",
  initialState: { value: false },
  reducers: {
    openCart: (state) => {
      state.value = true;
    },
    closeCart: (state) => {
      state.value = false;
    },
  },
});

export const { openCart, closeCart } = cartSlideSlice.actions;

export default cartSlideSlice.reducer;

export const cartSideBarState = (state) => state.cartSideBar.value;
