// src/components/HeroHeader.js
import React from 'react';
import '../styles/HeroHeader.css';// Assuming styles specific to HeroHeader are moved here

const HeroHeader = () => {
    return (
        <div className="hero-header">
            <span>Find Trips</span>
            <div className="logo-div">
                <img src="/icons/TE-logo.svg" alt="Logo"/>
            </div>
            <div>
                <span>Login</span>
                <button className="sign-up-button">Sign Up</button>
            </div>
        </div>
    );
};

export default HeroHeader;