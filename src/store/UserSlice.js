import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    userInfo: null, // Stores user details like name, email, etc.
    authToken: null, // Authentication token for secure API calls
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, action) {
            const { userInfo, authToken } = action.payload;
            state.isLoggedIn = true;
            state.userInfo = userInfo;
            state.authToken = authToken;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.userInfo = null;
            state.authToken = null;
        },
        updateProfile(state, action) {
            const updatedInfo = action.payload;
            state.userInfo = { ...state.userInfo, ...updatedInfo };
        },
    },
});
export const { login, logout, updateProfile } = userSlice.actions;
export default userSlice.reducer;