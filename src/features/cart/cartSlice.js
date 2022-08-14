import { createSlice } from "@reduxjs/toolkit";

const cartSlideSlice = createSlice({
  name: "cart data",
  initialState: { data: [], checkoutTotal: 800, loading: true },
  reducers: {
    addToCart: (state, action) => {
      state.data.push(action.payload);
      state.checkoutTotal += action.payload.price;
    },
    loadCart: (state, action) => {
      state.data = action.payload;
    },
    removeItemFromCart: (state, action) => {
      state.data = state.data.filter((item) => item._id !== action.payload.id);
      state.checkoutTotal = state.checkoutTotal - action.payload.price;
    },
    updateRequiredQuantity: (state, action) => {
      const requiredQuantity = action.payload.requiredQuantity;
      const id = action.payload.id;

      const index = state.data.findIndex((item) => item._id === id);
      state.data[index].requiredQuantity = requiredQuantity;
      if (state.data[index].offerPrice) {
        state.data[index].price =
          state.data[index].offerPrice * requiredQuantity;
      } else {
        state.data[index].price =
          state.data[index].originalPrice * requiredQuantity;
      }
    },
    updateSubTotal: (state) => {
      state.checkoutTotal = state.data.reduce((total, current) => {
        // if (current.offerPrice) {
        //   return total + current.offerPrice;
        // }
        return total + current.price;
      }, 0);
    },
    setCartLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  addToCart,
  removeItemFromCart,
  updateSubTotal,
  updateRequiredQuantity,
  loadCart,
  setCartLoading,
} = cartSlideSlice.actions;

export default cartSlideSlice.reducer;

export const cartItems = (state) => state.cart.data;

export const cartLoading = (state) => state.cart.loading;

export const checkoutPrice = (state) => state.cart.checkoutTotal;
