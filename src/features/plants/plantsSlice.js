import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "plants",
  initialState: { value: [] },
  reducers: {
    setPlants: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPlants } = slice.actions;

export default slice.reducer;

export const selectAllPlants = (state) => state.plants.value;
