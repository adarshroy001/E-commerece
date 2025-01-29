import React, { useState } from "react";
import InputField from "./InputField";
import { login } from "../../store/UserSlice"; // Redux action
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUpForm = ({ toggleForm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();

  // const validatePassword = (password) => {
  //   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  //   return passwordRegex.test(password);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error
    setSuccess(""); // Reset success message

    // if (!validatePassword(password)) {
    //   setError("Password must be at least 8 characters long and include at least one letter and one number. hello hello");
    //   return;
    // }

    try {
      // Sending the signup request
      const response = await axios.post("http://localhost:4000/api/auth/new", {
        name,
        phone,
        email,
        password,
      });

      setSuccess(response.data.message); // Set success message

      // Dispatch Redux action to update the user state
      dispatch(
        login({
          userInfo: { name, phone, email },
          authToken: response.data.token, // Assuming the backend sends a token
        })
      );

      // Optionally, you can redirect the user or clear the form here.
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Try again!"); // Error handling
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-[#dfebf6] ">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-6">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          {success && <p className="text-green-500 mb-2">{success}</p>}

          {/* Input Fields */}
          <InputField
            label="Name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <InputField
            label="Phone No."
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

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
            to={'/login'}
              type="button"
              onClick={toggleForm}
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
