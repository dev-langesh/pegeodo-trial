import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "plantOffers",
  initialState: { value: [] },
  reducers: {
    setOfferPlants: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setOfferPlants } = slice.actions;

export default slice.reducer;

export const selectAllPlantOffers = (state) => state.offer.value;
