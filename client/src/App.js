import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css"; // or whatever your main CSS file is named
import Login from "./pages/Login/login";
import SignUp from "./pages/Sign-up/sign-up";
import Home from "./pages/Landing-page/index"; // Assuming you have a Home component

function App() {
  return (
    <Routes>
      {/* Redirect root path to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Login route */}
      <Route path="/login" element={<Login />} />

      {/* Sign up route */}
      <Route path="/sign-up" element={<SignUp />} />

      {/* Home route (protected) */}
      <Route path="/home" element={<Home />} />

      {/* Add other routes as needed */}
    </Routes>
  );
}

export default App;
