import React, { useState } from "react";
import SignUpForm from "./Signup";
import SignInForm from "./Login";

function AuthPage() {
    const [isSignUp, setIsSignUp] = useState(true);

    const toggleForm = () => {
      setIsSignUp(!isSignUp);
    };
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#dfebf6] ">
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
      <h1 className="text-2xl font-bold text-center mb-6">
        {isSignUp ? "Sign Up" : "Sign In"}
      </h1>

      {isSignUp ? (
        <SignUpForm toggleForm={toggleForm} />
      ) : (
        <SignInForm toggleForm={toggleForm} />
      )}
    </div>
  </div>
  )
}

export default AuthPage