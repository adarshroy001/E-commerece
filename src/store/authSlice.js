import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLogedIn: false,
    user: null,
    userInfo: '',
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
        
        checkLogIn: (state) => {
            console.log("Checking login status...");
        },
        logout: (state) => {
            state.userLogedIn = false;
            state.user = null;
            state.userInfo = {};
        },
    },
});

export const { setUser, checkLogIn, logout } = authSlice.actions;
export default authSlice.reducer;
