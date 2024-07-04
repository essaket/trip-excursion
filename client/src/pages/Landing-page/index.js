// src/pages/Landing-page/index.js
import React from 'react';
import '../../styles/Home.css';
import HeroHeader from '../../components/HeroHeader';

const Home = () => {
    return (
        <div className="hero-section">
            <HeroHeader />
            <h1 className="big-header">Discover Extraordinary Guided Adventures</h1>
            <h2 className="sub-header">Explore the world with expert-led tours and personalized Trips</h2>
            <div className="w-[86%] h-[280px] rounded-[16px] mt-[10%] bg-white shadow-div"></div>
            {/* Add more content */}
        </div>
    );
};

export default Home;