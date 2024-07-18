// src/components/TripCard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import starIcon from "../assets/images/Star.svg";

const TripCard = ({
  trip_id,
  imageSrc,
  title,
  activities,
  price,
  accommodations,
  restaurants,
  itinerary,
  number_of_places,
}) => {
  const navigate = useNavigate();

  const handleViewPlace = () => {
    const tripData = {
      trip_id,
      imageSrc,
      title,
      activities,
      price,
      accommodations,
      restaurants,
      itinerary,
      number_of_places,
      rating: 4, // Assuming 4 stars based on your component
    };

    console.log("Navigating to book page with data:", tripData); // Add this line for debugging
    navigate(`/book/${trip_id}`, { state: { tripData } });
  };

  return (
    <div className="max-w-[850px] h-auto flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md">
      <div className="flex-1 h-[100%]">
        <img src={imageSrc} alt={title} className="h-[100%] object-cover" />
      </div>

      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between mb-4">
            <div className="w-2/3">
              <h3 className="font-montserrat text-xl font-bold mb-2">
                {title}
              </h3>
              <div className="flex items-center mb-4">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    src={starIcon}
                    alt="star"
                    className="w-4 h-4 mr-1"
                  />
                ))}
                <span className="ml-2 text-sm">From Previous Reviews</span>
              </div>
              <p className="text-base mb-2">
                <strong>{activities}</strong> activities
              </p>
              <p className="text-base mb-2">
                <strong>{accommodations}</strong> accommodations
              </p>
              <p className="text-base mb-2">
                <strong>{restaurants}</strong> restaurants
              </p>
              <p className="text-base mb-2">Itinerary: {itinerary}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-black mb-1">starting from</p>
              <p className="text-2xl font-bold text-[#FF8682]">${price}</p>
            </div>
          </div>
        </div>
        <button
          className="w-full h-12 bg-[#8DD3BB] rounded text-base font-bold text-black mt-4"
          onClick={handleViewPlace}
        >
          View Place
        </button>
      </div>
    </div>
  );
};

export default TripCard;
