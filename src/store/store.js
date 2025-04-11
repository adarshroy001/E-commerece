import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import cartReducer from "./CartSlice";
import productReducer from "./productSlice";
import orderReducer from "./OrderSlice";
import uiReducer from "./UiSlice";
import authReducer from "./authSlice"; 

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    products: productReducer,
    order: orderReducer,
    ui: uiReducer,
    auth: authReducer,
  },
});

export default store;
