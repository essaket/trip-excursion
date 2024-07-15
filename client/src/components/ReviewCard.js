// src/components/ReviewCard.js
import React, { useState } from "react";
import StarSvg from "../../src/assets/images/Star.svg";

const ReviewCard = ({
  title,
  description,
  reviewerName,
  reviewerDescription,
  imageSrc,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div
      className="review-card"
      style={{
        maxWidth: "425px",
        padding: "24px",
        backgroundColor: "white",
        boxShadow: "26px 26px 0 rgba(141, 211, 187, 0.4)",
        marginBottom: "26px",
        marginRight: "26px",
      }}
    >
      <h3
        style={{
          fontFamily: "Montserrat",
          fontWeight: "bold",
          fontSize: "24px",
          color: "#112211",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "Montserrat",
          fontSize: "14px",
          fontWeight: "medium",
          color: "#112211",
        }}
      >
        {showFullDescription ? description : `${description.slice(0, 100)}...`}
      </p>
      {!showFullDescription && (
        <div className="text-right">
          <button
            onClick={() => setShowFullDescription(true)}
            style={{
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: "medium",
              color: "#112211",
              textDecoration: "none",
            }}
          >
            View more
          </button>
        </div>
      )}
      <div className="flex stars mt-2">
        <img src={StarSvg} alt="star" />
        <img src={StarSvg} alt="star" />
        <img src={StarSvg} alt="star" />
        <img src={StarSvg} alt="star" />
        <img src={StarSvg} alt="star" />
      </div>
      <div className="reviewer-info mt-2">
        <p
          style={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: "16px",
            color: "#112211",
          }}
        >
          {reviewerName}
        </p>
        <p
          style={{
            fontFamily: "Montserrat",
            fontWeight: "medium",
            fontSize: "12px",
            color: "#112211",
          }}
        >
          {reviewerDescription}
        </p>
      </div>
      <img
        src={imageSrc}
        alt={reviewerName}
        style={{ borderRadius: "8px", marginTop: "8px" }}
      />
    </div>
  );
};

export default ReviewCard;
