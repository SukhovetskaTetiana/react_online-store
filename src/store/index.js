import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import buttonReducer from "./sidebarSlice";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    button: buttonReducer,
    cart: cartReducer,
    user: userReducer,
  },
});
