import React from "react";
import InputField from "./InputField";

const SignInForm = ({ toggleForm }) => {
  return (
    <form>
      <InputField label="Email" type="email" placeholder="Enter your email" />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      <div className="flex justify-between items-center mt-4">
        <button
          type="submit"
          className="bg-mypink text-white px-4 py-2 rounded hover:bg-[#5f7be1] w-full"
        >
          Sign In
        </button>
      </div>
      <p className="text-sm text-center mt-4">
        Not registered?{' '}
        <button
          type="button"
          onClick={toggleForm}
          className="text-mypink hover:underline"
        >
          Sign Up
        </button>
      </p>
    </form>
  );
};

export default SignInForm;