import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice'
import cartReducer from './CartSlice'
import productReducer from './ProductSlice'
import orderReducer from './OrderSlice'
import uiReducer from './UiSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        product: productReducer,
        order: orderReducer, // Include if order management is implemented
        ui: uiReducer, // Include if UI state management is needed
    },
});

export default store;
