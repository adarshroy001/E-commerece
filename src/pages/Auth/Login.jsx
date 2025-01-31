import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/UserSlice";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios";

const SignInForm = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      // Parse the JSON response body
      const responseData = await response.json();
      console.log(responseData);
      
        // Destructure the token and check if it's missing
        const { token, user } = responseData;
      if (!token) {
        throw new Error(responseData.message || "Login failed. Token missing . try again!");
      }
      const {data: userInfo } = await axios.get("http://localhost:4000/api/auth/getUserInfo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

      dispatch(
        login({
          userInfo, 
          authToken: token,
        })
      );

      //  Save authentication details in localStorage
      localStorage.setItem("authToken", token);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      setSuccess(responseData.message || "Login successful!");

      //  Redirect to home page after successful login
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
      setError(error.message);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-[#dfebf6]">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
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

