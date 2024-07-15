import React from "react";
import "../../styles/logo.css";
import LoginImage from "../../assets/images/Login-image.png";
import GoogleIcon from "../../assets/images/google.svg";

const Sign_up = () => {
  return (
    <div className="login-container flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* Left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Sign up</span>
          <span className="font-light text-gray-400 mb-6">
            Create your Trip_Excursion account
          </span>
          <div className="py-4">
  <div className="flex space-x-4">
    <div className="flex-1">
      <span className="mb-2 text-md">Name</span>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
        name="name"
        id="name"
        placeholder="Name"
      />
    </div>
    <div className="flex-1">
      <span className="mb-2 text-md">Surname</span>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
        name="surname"
        id="surname"
        placeholder="Surname"
      />
    </div>
  </div>
</div>
<div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
            />
          </div>
<div className="py-4">
  <div className="flex space-x-4">
    <div className="flex-1">
      <span className="mb-2 text-md">Password</span>
      <input
        type="password"
        name="password"
        id="password"
        className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
        placeholder="Password"
      />
    </div>
    <div className="flex-1">
      <span className="mb-2 text-md">Confirm Password</span>
      <input
        type="password"
        name="confirm-password"
        id="confirm-password"
        className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
        placeholder="Confirm Password"
      />
    </div>
  </div>
</div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember for 30 days</span>
            </div>
            <span className="font-bold text-md">Forgot password</span>
          </div>
          <button className="w-full bg-green-500 text-black p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
            Sign in
          </button>
          <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
            <img
              src={GoogleIcon}
              alt="Google"
              className="w-6 h-6 inline mr-2"
            />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            Don't have an account?{" "}
            <span className="font-bold text-black">Sign up for free</span>
          </div>
        </div>
        {/* Right side */}
        <div className="relative">
          <img
            src={LoginImage}
            alt="Background"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Sign_up;