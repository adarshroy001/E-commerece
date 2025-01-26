import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [], // Array to store product details
    loading: false, // Flag to track loading state
    error: null, // Store error message if any
};

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        filterProducts(state, action) {
            const { category, subCategory } = action.payload;
            state.products = state.products.filter(product =>
                (category ? product.category === category : true) &&
                (subCategory ? product.subCategory === subCategory : true)
            );
        },
    },
});

export const { setProducts, setLoading, setError, filterProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
