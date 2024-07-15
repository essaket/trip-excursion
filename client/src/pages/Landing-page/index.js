// src/pages/Landing-page/index.js
import React from "react";
import "../../styles/Home.css";
import HeroHeader from "../../components/HeroHeader";
import SearchForm from "../../components/SearchForm";
import TripCard from "../../components/TripCard";
import ReviewCard from "../../components/ReviewCard";
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
        <div className="max-w-7xl w-[86%] h-[280px] rounded-[16px] mt-[10%] bg-white shadow-div">
          <SearchForm />
        </div>
        {/* Add more content */}
      </div>
      <div className="trip-planning-section max-w-7xl min-w-xl mt-[5%] mx-[16vw]">
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
            className="text-[14px] font-medium text-[#112211] bg-transparent border-[#8DD3BB] border-[1px] rounded-[4px] w-[150px] h-[40px] hover:bg-[#8DD3BB] hover:text-white transition duration-300 ease-in-out"
            style={{ fontFamily: "Montserrat" }}
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
      {/* New Reviews Section */}
      <div className="reviews-section mt-[3.5%] max-w-7xl min-w-xl mx-[16vw] mb-[2%]">
        <div className="flex justify-between items-center">
          <div>
            <h1
              className="text-[32px] font-semibold"
              style={{ fontFamily: "Montserrat" }}
            >
              Reviews
            </h1>
            <h2
              className="text-[16px] font-normal"
              style={{ fontFamily: "Montserrat" }}
            >
              What people says about Trip-Excursion
            </h2>
          </div>
          <button
            className="text-[#112211] bg-transparent border-[#8DD3BB] border-[1px] rounded-[4px] w-[150px] h-[40px] hover:bg-[#8DD3BB] hover:text-white transition duration-300 ease-in-out"
            style={{ fontFamily: "Montserrat" }}
          >
            See All
          </button>
        </div>
        <div className="review-cards-container mt-4 flex flex-wrap justify-between">
          <ReviewCard
            title="Great Experience"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            reviewerName="John Doe"
            reviewerDescription="Traveler"
            imageSrc={ParisImage}
          />

          <ReviewCard
            title="Unforgettable Adventure"
            description="Our trip with Trip-Excursion was simply amazing. The guides were knowledgeable, the itinerary was well-planned, and the experiences were unique. I'd highly recommend their services to anyone looking for an extraordinary travel experience."
            reviewerName="Emma Thompson"
            reviewerDescription="Adventure Enthusiast"
            imageSrc={SydneyImage}
          />
          <ReviewCard
            title="Exceptional Service"
            description="From the moment we booked until the end of our journey, Trip-Excursion provided top-notch service. They were attentive to our needs and made sure every aspect of our trip was perfect. It was truly a 5-star experience."
            reviewerName="Michael Chen"
            reviewerDescription="Frequent Traveler"
            imageSrc={BakuImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
