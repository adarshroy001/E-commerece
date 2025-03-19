import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {server} from '../App';

// Fetching Cart Items
export const fetchCart = createAsyncThunk("cart/fetchCart",
    async (_, { rejectWithValue }) => {
        try {
            // const token = localStorage.getItem("authToken");
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDJhN2Q5OWViMjY1YTY0Y2NhYTE5YSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzQxODU4Nzc4LCJleHAiOjE3NDI0NjM1Nzh9.gLQ0NnLmq858uDt22I4mvijBb1RHP0IX0R6dzLdHjD0'
            console.log(token);
            const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
            const response = await axios.get(`${server}/api/cart`, config);
            console.log("API Response:", response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    });

// Async Thunk to add item to cart
export const addToCart = createAsyncThunk('cart/addToCart',
    async (product, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("authToken");
            const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
            const response = await axios.post(`${server}/api/cart/add`, {
                productId: product._id,
                quantity: 1,
            }, config);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    });

// Async Thunk to update cart quantity
export const updateCart = createAsyncThunk('cart/updateCart',
    async ({ productId, quantity }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("authToken");
            const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
            const response = await axios.put(`${server}/api/cart/update`, { productId, quantity }, config);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    });

// Async Thunk to remove item from cart
export const removeFromCart = createAsyncThunk('cart/removeFromCart',
    async (productId, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("authToken");
            const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
            const response = await axios.delete(`${server}/api/cart/remove/${productId}`, config);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    });

// Async Thunk to clear cart
export const clearCart = createAsyncThunk('cart/clearCart',
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("authToken");
            const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
            const response = await axios.delete(`${server}/api/cart/clear`, config);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    });

// Cart Slice 
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Cart
            .addCase(fetchCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.items || [];
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Add to Cart
            .addCase(addToCart.fulfilled, (state, action) => {
                state.items = action.payload.cart.items;
            })
            // Update Cart
            .addCase(updateCart.fulfilled, (state, action) => {
                state.items = action.payload.cart.items;
            })
            // Remove from Cart
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.items = action.payload.cart.items;
            })
            // Clear Cart
            .addCase(clearCart.fulfilled, (state) => {
                state.items = [];
            });
    }
});

export default cartSlice.reducer;
