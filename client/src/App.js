import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css"; // or whatever your main CSS file is named
import { AuthProvider } from "./components/AuthContext"; // Import AuthProvider
import Login from "./pages/Login/login";
import SignUp from "./pages/Sign-up/sign-up";
import Trips from "./pages/trips/trips";
import Home from "./pages/Landing-page/index";
import Book from "./pages/Book/book";
import BookingProcess from "./pages/Book/booking-process";

function App() {
  return (
    <AuthProvider>
      {" "}
      {/* Wrap the entire app with AuthProvider */}
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
        <Route path="/trips" element={<Trips />} />

        <Route path="/book/:id" element={<Book />} />

        <Route path="/booking-process" element={<BookingProcess />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
