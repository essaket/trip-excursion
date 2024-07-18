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

    console.log("Navigating to book page with data:", tripData);
    navigate(`/book/${trip_id}`, { state: { tripData } });
  };

  return (
    <div className="flex bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="w-1/3 flex-shrink-0 ">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-montserrat text-lg font-bold text-[#112211]">
              {title}
            </h3>
            <div className="text-right">
              <p className="text-xs text-gray-600">starting from</p>
              <p className="text-lg font-bold text-[#FF8682]">${price}</p>
            </div>
          </div>
          <div className="flex items-center mb-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={starIcon} alt="star" className="w-3 h-3 mr-1" />
            ))}
            <span className="text-xs text-gray-600 ml-1">Previous Reviews</span>
          </div>
          <p className="text-sm text-[#112211] mb-1">
            <span className="font-semibold">{activities}</span> activities •{" "}
            <span className="font-semibold">{accommodations}</span>{" "}
            accommodations •{" "}
            <span className="font-semibold">{restaurants}</span> restaurants
          </p>
          <p className="text-xs text-gray-600 truncate">{itinerary}</p>
        </div>
        <button
          className="w-full mt-2 py-2 bg-[#8DD3BB] rounded text-sm font-bold text-[#112211] hover:bg-[#7bc1a9] transition-colors duration-300"
          onClick={handleViewPlace}
        >
          View Place
        </button>
      </div>
    </div>
  );
};

export default TripCard;
