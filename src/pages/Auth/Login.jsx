import React, { useState } from "react";
import InputField from "./InputField";
import { useDispatch } from "react-redux";
import { login } from '../../store/UserSlice'
import { Link } from "react-router-dom";

const SignInForm = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Dispatch login action with user data and auth token
        dispatch(login({ userInfo: data.user, authToken: data.token }));
      } else {
        // Handle error (e.g., incorrect credentials)
        alert('Invalid login credentials.');
      }
    } catch (error) {
      console.error('Login failed', error);
      alert('An error occurred during login.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-[#dfebf6] ">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-6">
          Sign In
        </h1>
        <form onSubmit={handleLogin}>
          <InputField label="Email" type="email" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex justify-between items-center mt-4">
            <button type="submit" className="bg-mypink text-white px-4 py-2 rounded hover:bg-[#5f7be1] w-full">
              Sign In
            </button>
          </div>
          <p className="text-sm text-center mt-4">
            Not registered?{' '}
            <Link to={'/signup'} type="button" onClick={toggleForm} className="text-mypink hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default SignInForm