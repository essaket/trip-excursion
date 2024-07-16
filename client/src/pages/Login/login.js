import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import LoginImage from "../../assets/images/Login-image.png";
import GoogleIcon from "../../assets/images/google.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        // Redirect to dashboard or home page
        window.location.href = "/Home";
      } else {
        // Handle login error
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-container flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit}>
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          {/* Left side */}
          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl font-bold">Login</span>
            <span className="font-light text-gray-400 mb-6">
              Login to access your Trip_Excursion account
            </span>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                name="pass"
                id="pass"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
              <Link
                to="/sign-up"
                className="font-bold text-black hover:underline"
              >
                Sign up for free
              </Link>
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
      </form>
    </div>
  );
};

export default Login;
