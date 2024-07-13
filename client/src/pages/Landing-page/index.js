// src/pages/Landing-page/index.js
import React from "react";
import "../../styles/Home.css";
import HeroHeader from "../../components/HeroHeader";
import SearchForm from "../../components/SearchForm";
import TripCard from "../../components/TripCard";
import BakuImage from "../../assets/images/Baku.png";
import ParisImage from "../../assets/images/Paris.png";
import TokyoImage from "../../assets/images/Tokyo.png";
import NewYorkImage from "../../assets/images/Newyork.png";
import LondonImage from "../../assets/images/London.png";
import SydneyImage from "../../assets/images/sydney.png";
import IstanbulImage from "../../assets/images/Istanbul.png";
import MaléImage from "../../assets/images/Malé.png";
import DubaiImage from "../../assets/images/Dubai.png";

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <HeroHeader />
        <h1 className="big-header">Discover Extraordinary Guided Adventures</h1>
        <h2 className="sub-header">
          Explore the world with expert-led tours and personalized Trips
        </h2>
        <div className="w-[86%] h-[280px] rounded-[16px] mt-[10%] bg-white shadow-div">
          <SearchForm />
        </div>
        {/* Add more content */}
      </div>
      <div className="trip-planning-section mt-[5%]">
        <div className="flex justify-between items-center">
          <div>
            <h1
              className="text-[32px] font-semibold text-black"
              style={{ fontFamily: "Montserrat" }}
            >
              Plan your perfect trip
            </h1>
            <h2
              className="text-[16px] font-normal text-[#112211]"
              style={{ fontFamily: "Montserrat" }}
            >
              Search Flights & Places Hire to our most popular destinations
            </h2>
          </div>
          <button
            className="text-[14px] font-medium text-[#112211] border-[#8DD3BB] border-[1px] rounded-[4px] w-[150px] h-[40px]"
            style={{ fontFamily: "Montserrat", backgroundColor: "transparent" }}
          >
            See more places
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-5 mb-5">
          <TripCard
            imageSrc={BakuImage}
            title="Baku, Azerbaijan"
            subTitle="Flights • Hotels • Resorts"
          />
          <TripCard
            imageSrc={ParisImage}
            title="Paris, France"
            subTitle="Flights • Hotels • Resorts"
          />
          <TripCard
            imageSrc={TokyoImage}
            title="Tokyo, Japan"
            subTitle="Flights • Hotels • Resorts"
          />
          <TripCard
            imageSrc={NewYorkImage}
            title="New York, USA"
            subTitle="Flights • Hotels • Resorts"
          />
          <TripCard
            imageSrc={LondonImage}
            title="London, UK"
            subTitle="Flights • Hotels • Resorts"
          />
          <TripCard
            imageSrc={SydneyImage}
            title="Sydney, Australia"
            subTitle="Flights • Hotels • Resorts"
          />
          <TripCard
            imageSrc={IstanbulImage}
            title="Istanbul, Turkey"
            subTitle="Flights • Hotels • Resorts"
          />
          <TripCard
            imageSrc={MaléImage}
            title="Malé, Maldives"
            subTitle="Flights • Hotels • Resorts"
          />
          <TripCard
            imageSrc={DubaiImage}
            title="Dubai, UAE"
            subTitle="Flights • Hotels • Resorts"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
