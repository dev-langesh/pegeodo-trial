import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "Special Offers",
  initialState: { value: [] },
  reducers: {
    setSpecialOffer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSpecialOffer } = slice.actions;

export default slice.reducer;

export const selectAllSpecialOffers = (state) => state.specialOffers.value;
