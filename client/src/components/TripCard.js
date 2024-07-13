// src/components/TripCard.js
import React from "react";
import "../styles/TripCard.css";

const TripCard = ({ imageSrc, title, subTitle }) => {
  return (
    <div className="trip-card">
      <img src={imageSrc} alt={title} className="trip-image" />
      <div className="trip-info">
        <h3 className="trip-title">{title}</h3>
        <p className="trip-subtitle">{subTitle}</p>
      </div>
    </div>
  );
};

export default TripCard;
