import { createSlice } from "@reduxjs/toolkit";

const accountDetailsSlice = createSlice({
  name: "account details",
  initialState: { details: {}, loading: false },
  reducers: {
    setAccountDatails: (state, action) => {
      state.details = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setAccountDatails } = accountDetailsSlice.actions;

export default accountDetailsSlice.reducer;

export const accountDetails = (state) => state.account.details;

export const accountLoadingStatus = (state) => state.account.loading;
