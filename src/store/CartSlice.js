import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalQuantity: 0, // Only tracking number of items
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setTotalQuantity: (state, action) => {
      state.totalQuantity = action.payload;
    },
    increaseQuantity: (state) => {
      state.totalQuantity += 1;
    },
    decreaseQuantity: (state) => {
      state.totalQuantity = Math.max(0, state.totalQuantity - 1);
    },
  },
});

export const { setTotalQuantity, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
