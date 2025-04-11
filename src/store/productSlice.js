import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../App";

// Async action to fetch products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${server}/api/products`);      
      return response.data; // Return fetched products
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch products");
    }
  }
);

const initialState = {
  products: [],
  searchQuery: [], // Stores product details
  loading: false, // Loading flag
  error: null, // Stores error message
};

const productSlice = createSlice({
  name: "products", // Ensure consistency with `configureStore`
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error on new fetch
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      });
  },
});

export const { setProducts, setSearchQuery } = productSlice.actions;
export default productSlice.reducer;

