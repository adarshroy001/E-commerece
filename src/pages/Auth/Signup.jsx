import React, { useState } from "react";
import { login } from "../../store/UserSlice"; // Redux action
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Corrected redirection

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error
    setSuccess(""); // Reset success message

    try {
      // Sending the signup request
      const response = await axios.post(
        "http://localhost:4000/api/auth/new",
        { name, phone, email, password }, 
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      setSuccess(response.data.message); 

      dispatch(
        login({
          userInfo: { name, phone, email },
          authToken: response.data.token, 
        })
      );

      // Storing token in localStorage
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem('userInfo' , JSON.stringify(response.data.user) );
      console.log(response.data.user);
      

      // Redirecting user after successful signup
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Try again!"); // Error handling
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-[#dfebf6]">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          {success && <p className="text-green-500 mb-2">{success}</p>}

          {/* Input Fields */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Phone No.</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
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
              className="bg-myblue text-white px-4 py-2 rounded hover:bg-[#5f7be1] w-full"
            >
              Sign Up
            </button>
          </div>

          <p className="text-sm text-center mt-4">
            Already registered?{" "}
            <Link
              to={"/login"}
              className="text-myblue hover:underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
