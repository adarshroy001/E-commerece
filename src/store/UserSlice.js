import { createSlice } from "@reduxjs/toolkit";

const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
const storedToken = localStorage.getItem("authToken");

const initialState = {
    isLoggedIn: !!storedToken, // Convert token presence to boolean
    userInfo: storedUserInfo, 
    authToken: storedToken,
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

            // Store in localStorage
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            localStorage.setItem("authToken", authToken);
        },
        logout(state) {
            state.isLoggedIn = false;
            state.userInfo = null;
            state.authToken = null;

            // Clear localStorage
            localStorage.removeItem("userInfo");
            localStorage.removeItem("authToken");
        },
        updateProfile(state, action) {
            const updatedInfo = action.payload;
            state.userInfo = { ...state.userInfo, ...updatedInfo };

            // Update localStorage
            localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
        },
    },
});

export const { login, logout, updateProfile } = userSlice.actions;
export default userSlice.reducer;
