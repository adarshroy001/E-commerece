import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [], // Array to store user's orders
    currentOrder: null, // Store current order in process
    orderHistory: [], // Store completed orders
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        placeOrder(state, action) {
            state.currentOrder = action.payload;
        },
        completeOrder(state, action) {
            state.orderHistory.push(action.payload);
            state.currentOrder = null;
        },
        cancelOrder(state) {
            state.currentOrder = null;
        },
    },
});

export const { placeOrder, completeOrder, cancelOrder } = orderSlice.actions;
export default orderSlice.reducer;
