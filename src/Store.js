import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Features/User/userSlice";
import cartSlice from "./Features/Cart/CartSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
});

export default store;
