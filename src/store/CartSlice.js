import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [], // Array to store cart items
    totalQuantity: 0, // Total quantity of items in the cart
    totalPrice: 0, // Total price of all items in the cart
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = action.payload;
            const existingItem = state.items.find(i => i.id === item.id);

            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                state.items.push(item);
            }

            state.totalQuantity += item.quantity;
            state.totalPrice += item.price * item.quantity;
        },
        removeFromCart(state, action) {
            const itemId = action.payload;
            const item = state.items.find(i => i.id === itemId);

            if (item) {
                state.items = state.items.filter(i => i.id !== itemId);
                state.totalQuantity -= item.quantity;
                state.totalPrice -= item.price * item.quantity;
            }
        },
        updateItemQuantity(state, action) {
            const { itemId, quantity } = action.payload;
            const item = state.items.find(i => i.id === itemId);

            if (item) {
                state.totalQuantity -= item.quantity;
                state.totalPrice -= item.price * item.quantity;

                item.quantity = quantity;

                state.totalQuantity += quantity;
                state.totalPrice += item.price * quantity;
            }
        },
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    },
});

export const { addToCart, removeFromCart, updateItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
