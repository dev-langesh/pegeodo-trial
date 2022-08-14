import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: {
    options: { name: "", category: "", price: "" },
    applyFilter: false,
  },
  reducers: {
    changeFilterOptions: (state, action) => {
      state.value = action.payload;
    },
    applyFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeFilterOptions, applyFilter } = slice.actions;

export default slice.reducer;

export const getFilterOptions = (state) => state.filter.options;
