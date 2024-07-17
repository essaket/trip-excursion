// src/components/HeroHeader.js
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Adjust the import path as needed

const HeroHeader = ({
  imgSrc,
  buttonTextColor = "text-gray-900",
  buttonBgColor = "bg-white",
  buttonHoverBgColor = "hover:bg-gray-100",
}) => {
  const { isLoggedIn, logout, user } = useAuth();
  const navigate = useNavigate();

  const buttonClasses = `${buttonTextColor} ${buttonBgColor} ${buttonHoverBgColor} px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out`;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    // This effect will run whenever isLoggedIn or user changes
    console.log("Auth state changed:", { isLoggedIn, user });
  }, [isLoggedIn, user]);

  return (
    <header className="bg-transparent">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1 justify-start">
          <Link to="/trips" className={buttonClasses}>
            Explore Trips
          </Link>
        </div>
        <div className="flex flex-1 justify-center">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Trip Excursion</span>
            <img className="h-8 w-auto" src={imgSrc} alt="Logo image" />
          </a>
        </div>
        <div className="flex flex-1 justify-end space-x-4">
          {isLoggedIn ? (
            <>
              <span className={`${buttonTextColor} text-sm font-medium`}>
                Welcome, {user?.username || "User"}
              </span>
              <button onClick={handleLogout} className={buttonClasses}>
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={buttonClasses}>
                Log in
              </Link>
              <Link to="/signup" className={buttonClasses}>
                Sign up
              </Link>
            </>
          )}
        </div>
      </nav>
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button
          type="button"
          className="absolute top-4 right-4 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default HeroHeader;
