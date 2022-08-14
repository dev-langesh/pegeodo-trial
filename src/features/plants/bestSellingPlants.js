import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "bestSellingPlants",
  initialState: { value: [] },
  reducers: {
    setBestSellingPlants: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBestSellingPlants } = slice.actions;

export default slice.reducer;

export const selectBestSellingPlants = (state) => state.bestSellingPlants.value;
