import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/UserSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { setUser } from "../../store/authSlice";
import { server } from "../../App";
import { setTotalQuantity } from "../../store/CartSlice";

const SignInForm = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data: loginData } = await axios.post(`${server}/api/auth/login`, { email, password }, { withCredentials: true });
      //since User and token is found in login api and User here dont have all the data so we will fetch from getUserInfo 
      if (loginData) {
        const { data: userData } = await axios.get(`${server}/api/auth/getUserInfo`, { withCredentials: true });
        const { user } = userData;  // Extract user object
        dispatch(setUser({ userInfo: user, user: user, userLogedIn: true }));   
        //
      axios.get(`${server}/api/cart`, { withCredentials: true })
      .then((res) => {
        const cartItems = res.data.items || []; // Ensure it's always an array
        const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        dispatch(setTotalQuantity(totalQuantity));
      })
        toast.success('LogIn Successful')
      }
      else{
        toast.error('LogIn failed')
      }
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
      toast.error(error.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-[#dfebf6]">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
            >
              Sign In
            </button>
          </div>
          <p className="text-sm text-center mt-4">
            Not registered?{" "}
            <Link
              to={"/signup"}
              type="button"
              onClick={toggleForm}
              className="text-blue-500 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;


