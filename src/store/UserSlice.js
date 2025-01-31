import { createSlice } from "@reduxjs/toolkit";

const storedToken = localStorage.getItem("authToken");
const storedUserInfo = storedToken ? JSON.parse(localStorage.getItem("userInfo")) : {};

const initialState = {
    isLoggedIn: !!storedToken, 
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

            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            localStorage.setItem("authToken", authToken);
        },
        logout(state) {
            state.isLoggedIn = false;
            state.userInfo = {};
            state.authToken = null;

            localStorage.removeItem("userInfo");
            localStorage.removeItem("authToken");
        },
        updateProfile(state, action) {
            const updatedInfo = action.payload;
            state.userInfo = { ...state.userInfo, ...updatedInfo };

            localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
        }
    },
});

export const { login, logout, updateProfile } = userSlice.actions;
export default userSlice.reducer;

