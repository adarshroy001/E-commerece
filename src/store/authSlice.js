import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLogedIn: false,
    user: null,
    userInfo: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userLogedIn = action.payload.userLogedIn;
            state.user = action.payload.user;
            state.userInfo = action.payload.userInfo;
        },
        logout: (state) => {
            state.userLogedIn = false;
            state.user = null;
            state.userInfo = null;
        }
    }
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
