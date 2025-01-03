import React from "react";
import InputField from "./InputField";

const SignUpForm = ({ toggleForm }) => {
  return (
    <form>
      <InputField label="Name" type="text" placeholder="Enter your name" />
      <InputField
        label="Phone No."
        type="tel"
        placeholder="Enter your phone number"
      />
      <InputField label="Email" type="email" placeholder="Enter your email" />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
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
        Already registered?{' '}
        <button
          type="button"
          onClick={toggleForm}
          className="text-myblue hover:underline"
        >
          Sign In
        </button>
      </p>
    </form>
  );
};

export default SignUpForm;