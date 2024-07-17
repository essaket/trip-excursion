// src/pages/Book/book.js
import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "../../styles/book.css";
import HeroHeader from "../../components/HeroHeader";
import Logo from "../../assets/images/Logo-dark.svg";

const Book = () => {
  const locationHook = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [tripData, setTripData] = useState(null);
  const [favorite, setFavorite] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to dynamically import images
  const importAll = (r) => r.keys().map(r);
  const images = importAll(
    require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
  );

  useEffect(() => {
    console.log("locationHook.state:", locationHook.state);
    console.log("id:", id);
    if (locationHook.state && locationHook.state.tripData) {
      console.log("Setting tripData from state");
      setTripData(locationHook.state.tripData);
    } else {
      console.log("Fetching trip data");
      fetchTripData(id);
    }
  }, [locationHook, id]);

  useEffect(() => {
    if (tripData) {
      // Filter images based on trip title or ID
      const tripImages = images.filter(
        (image) =>
          image.includes(tripData.title.split(",")[0]) ||
          image.includes(tripData.trip_id)
      );

      if (tripImages.length > 0) {
        setSelectedImage(tripImages[0]);
      }
    }
  }, [tripData, images]);

  const fetchTripData = async (tripId) => {
    try {
      console.log("Fetching data for trip ID:", tripId);
      const response = await fetch(`/api/trips/${tripId}`);
      const data = await response.json();
      console.log("Fetched data:", data);
      setTripData(data);
    } catch (error) {
      console.error("Error fetching trip data:", error);
    }
  };

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
      <span className="stars">
        {"★".repeat(fullStars)}
        {"☆".repeat(emptyStars)}
      </span>
    );
  };

  const handleBookNow = () => {
    navigate("/booking-process", { state: { tripData } });
  };

  if (!tripData) {
    return <div>Loading...</div>;
  }

  // Filter images based on trip title or ID
  const tripImages = images.filter(
    (image) =>
      image.includes(tripData.title.split(",")[0]) ||
      image.includes(tripData.trip_id)
  );

  return (
    <>
      <HeroHeader imgSrc={Logo} />
      <section className="bg-background text-foreground p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold flex items-center">
              {tripData.title}
              <span className="ml-2 text-xl font-normal">
                {renderStars(tripData.rating)} ({tripData.rating})
              </span>
            </h1>
            <div className="flex items-center space-x-4">
              <div className="bg-secondary text-secondary-foreground p-2 rounded-lg">
                <span className="text-lg font-semibold">${tripData.price}</span>
              </div>
              <div className="flex space-x-4">
                <div
                  className="bg-white border border-white p-2 rounded-full cursor-pointer"
                  onClick={toggleFavorite}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke={favorite ? "red" : "currentColor"}
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21.5l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.68L12 21.5z"
                    ></path>
                  </svg>
                </div>
                <button
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg"
                  onClick={handleBookNow}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {tripImages.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Image Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <img
                    src={selectedImage}
                    alt="Selected view"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {tripImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`View ${index + 1}`}
                      className={`w-full h-auto rounded-lg cursor-pointer ${
                        selectedImage === image ? "border-2 border-primary" : ""
                      }`}
                      onClick={() => setSelectedImage(image)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-muted-foreground mb-4">
              Located in {tripData.title}, this trip offers a{" "}
              {tripData.itinerary}-day adventure with{" "}
              {tripData.number_of_places} exciting activities. You'll enjoy
              comfortable stays at {tripData.accommodations} different
              accommodations and savor culinary experiences at{" "}
              {tripData.restaurants} local restaurants. Whether you're seeking
              relaxation or adventure, this trip provides the perfect blend of
              experiences to create lasting memories.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Activities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-muted-foreground">
              <div className="flex items-center">
                <img
                  src="https://openui.fly.dev/openui/24x24.svg?text=🏊"
                  alt="Swimming pool"
                  className="mr-2"
                />
                <span>Indoor pool</span>
              </div>
              <div className="flex items-center">
                <img
                  src="https://openui.fly.dev/openui/24x24.svg?text=🍽️"
                  alt="Restaurant"
                  className="mr-2"
                />
                <span>Restaurant</span>
              </div>
              <div className="flex items-center">
                <img
                  src="https://openui.fly.dev/openui/24x24.svg?text=🛏️"
                  alt="Room service"
                  className="mr-2"
                />
                <span>Room service</span>
              </div>
              <div className="flex items-center">
                <img
                  src="https://openui.fly.dev/openui/24x24.svg?text=💼"
                  alt="Business center"
                  className="mr-2"
                />
                <span>Business center</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Reviews</h2>
            <div className="p-3 rounded-lg mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-primary text-primary-foreground p-2 rounded-full mr-4">
                    <span className="text-lg font-bold">{tripData.rating}</span>
                  </div>
                  <span className="text-muted-foreground">Very good</span>
                </div>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                  Add reviews
                </button>
              </div>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-muted-foreground mb-2">
                    "Great location and service. The activities were exciting
                    and well-organized."
                  </p>
                  <span className="text-sm text-muted-foreground">
                    - John Doe
                  </span>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-muted-foreground mb-2">
                    "Amazing views and experiences. The accommodations were
                    comfortable and clean!"
                  </p>
                  <span className="text-sm text-muted-foreground">
                    - Jane Smith
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Book;
