import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import server from '../App'

// Fetching Cart Items
export const fetchCart = createAsyncThunk("cart/fetchCart", 
    async (_, { rejectWithValue }) => {
        try {
            // Retrieve the token from localStorage
            const token = localStorage.getItem("authToken");

            // Create headers including the token if available
            const config = token ? {
                headers: { Authorization: `Bearer ${token}` }
            } : {};

            const response = await axios.get(`${server}/api/cart`, config);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    });

// Async Thunk to add item to cart
export const addToCart = createAsyncThunk('cart/addToCart', 
    async (product, { rejectWithValue }) => {
        try {
            const response = await axios.post('/cart/add', {
                productId: product._id,
                quantity: 1,
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    });

// Async Thunk to update cart quantity
export const updateCart = createAsyncThunk('cart/updateCart', 
    async ({ productId, quantity }, { rejectWithValue }) => {
        try {
            const response = await axios.put('/cart/update', { productId, quantity });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    });

// Async Thunk to remove item from cart
export const removeFromCart = createAsyncThunk('cart/removeFromCart', 
    async (productId, { rejectWithValue }) => {
        try {
            await axios.delete(`/cart/remove/${productId}`);
            return productId; // Returning productId to filter from store
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    });

// Async Thunk to clear cart
export const clearCart = createAsyncThunk('cart/clearCart', 
    async (_, { rejectWithValue }) => {
        try {
            await axios.delete('/cart/clear');
            return []; // Reset cart items
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
                state.items = action.payload.items;
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Add to Cart
            .addCase(addToCart.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            // Update Cart
            .addCase(updateCart.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item.productId._id === action.payload.productId);
                if (index !== -1) {
                    state.items[index].quantity = action.payload.quantity;
                }
            })
            // Remove from Cart
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.productId._id !== action.payload);
            })
            // Clear Cart
            .addCase(clearCart.fulfilled, (state) => {
                state.items = [];
            });
    }
});

export default cartSlice.reducer;
