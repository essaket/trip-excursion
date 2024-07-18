import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/sign-up.css";
import LoginImage1 from "../../assets/images/Login-image-1.png";
import GoogleIcon from "../../assets/images/google.svg";

const Sign_up = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          username,
          email,
          password,
        }
      );
      if (response && response.data) {
        console.log(response.data);
        setSignupSuccess(true);
        // You might want to clear the form fields here
      } else {
        console.error("Unexpected response format:", response);
      }
    } catch (error) {
      if (error.response) {
        console.error("Registration error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
      // Handle registration error
    }
  };

  return (
    <div className="login-container flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit}>
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
                  <span className="mb-2 text-md">Username</span>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    name="name"
                    id="name"
                    placeholder="Enter your username"
                  />
                </div>
              </div>
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    name="confirm-password"
                    id="confirm-password"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            </div>
            {signupSuccess && (
              <span className="text-green-500 font-bold mt-4 block">
                You successfully signed up to Trip Excursion
              </span>
            )}
            <div className="flex justify-between w-full py-4">
              <div className="mr-24">
                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                <span className="text-md">Remember for 30 days</span>
              </div>
              <span className="font-bold text-md">Forgot password</span>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-green-500 text-black p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            >
              Sign up
            </button>
            <button
              onClick={() => navigate("/login")}
              className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
            >
              Back to login
            </button>
          </div>
          {/* Right side */}
          <div className="relative">
            <img
              src={LoginImage1}
              alt="Background"
              className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Sign_up;
