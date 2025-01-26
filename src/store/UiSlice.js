import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false, // Whether app is in a loading state
    showModal: false, // Whether a modal is visible
    notification: null, // Store notification message
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        showModal(state) {
            state.showModal = true;
        },
        hideModal(state) {
            state.showModal = false;
        },
        setNotification(state, action) {
            state.notification = action.payload;
        },
        clearNotification(state) {
            state.notification = null;
        },
    },
});

export const { setLoading, showModal, hideModal, setNotification, clearNotification } = uiSlice.actions;
export default uiSlice.reducer;
