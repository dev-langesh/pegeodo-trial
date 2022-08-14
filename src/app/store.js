import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebarSlice";
import plantsReducer from "../features/plants/plantsSlice";
import offerPlantsReducer from "../features/plants/offerPlantsSlice";
import specialOffersReducer from "../features/plants/specialOfferSlice";
import bestSellingPlantsReducer from "../features/plants/bestSellingPlants";
import cartSideBarReducer from "../features/cart/cartSideBarSlice";
import accountSideBarReducer from "../features/account/accountSidebarSlice";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/authSlice";
import filterReducer from "../features/filter/filterSlice";
import accountDetailsReducer from "../features/account/accountDetailsSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    plants: plantsReducer,
    offer: offerPlantsReducer,
    bestSellingPlants: bestSellingPlantsReducer,
    specialOffers: specialOffersReducer,
    cart: cartReducer,
    cartSideBar: cartSideBarReducer,
    auth: authReducer,
    filter: filterReducer,
    account: accountDetailsReducer,
    accountSideBar: accountSideBarReducer,
  },
});
