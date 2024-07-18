import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const SearchForm = () => {
  const [cities, setCities] = useState([]);
  const [allTrips, setAllTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedTrip, setSelectedTrip] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("/api/cities");
        const data = await response.json();
        console.log("Fetched cities:", data);
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    const fetchAllTrips = async () => {
      try {
        const response = await fetch("/api/trips");
        const data = await response.json();
        console.log("Fetched all trips:", data);
        setAllTrips(data);
      } catch (error) {
        console.error("Error fetching all trips:", error);
      }
    };

    fetchCities();
    fetchAllTrips();
  }, []);

  useEffect(() => {
    console.log("Selected City changed to:", selectedCity);
    console.log("All Trips:", allTrips);

    if (selectedCity) {
      const cityTrips = allTrips.filter(
        (trip) => String(trip.city_id) === String(selectedCity)
      );
      console.log("Filtered Trips:", cityTrips);
      setFilteredTrips(cityTrips);
    } else {
      setFilteredTrips([]);
    }
  }, [selectedCity, allTrips]);

  const handleCityChange = (e) => {
    const cityId = e.target.value;
    console.log("Selected city_id:", cityId);
    setSelectedCity(cityId);
    setSelectedTrip(""); // Reset selected trip when city changes
  };

  return (
    <div className="search-form">
      <div className="header-section">
        <h3
          style={{
            color: "#112211",
            fontFamily: "Montserrat",
            fontWeight: "600",
            fontSize: "16px",
          }}
        >
          Look For Your Next Destination
        </h3>
        <div
          style={{
            height: "4px",
            width: "260px",
            backgroundColor: "#8DD3BB",
            margin: "30px 0",
          }}
        ></div>
      </div>
      <div className="inputs-row">
        <div className="input-group">
          <label htmlFor="city" className="input-label">
            City
          </label>
          <select
            id="city"
            name="city"
            className="input-field"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city.city_id} value={city.city_id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="trip" className="input-label">
            Trip
          </label>
          <select
            id="trip"
            name="trip"
            className="input-field"
            value={selectedTrip}
            onChange={(e) => setSelectedTrip(e.target.value)}
            disabled={!selectedCity}
          >
            <option value="">Select a trip</option>
            {filteredTrips.map((trip) => (
              <option key={trip.trip_id} value={trip.trip_id}>
                {trip.title}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="trip-date" className="input-label">
            Trip Date
          </label>
          <input
            type="date"
            id="trip-date"
            name="trip-date"
            placeholder=" "
            className="input-field"
          />
        </div>
      </div>
      <button
        onClick={() => {
          if (selectedTrip) {
            const selectedTripData = allTrips.find(
              (trip) => String(trip.trip_id) === String(selectedTrip)
            );
            if (selectedTripData) {
              const tripData = {
                trip_id: selectedTripData.trip_id,
                imageSrc: require(`../assets/images/${
                  selectedTripData.title.split(",")[0]
                }.png`),
                title: selectedTripData.title,
                activities: selectedTripData.number_of_places,
                price: selectedTripData.price,
                accommodations: selectedTripData.accommodations,
                restaurants: selectedTripData.restaurants,
                itinerary: selectedTripData.itinerary,
                number_of_places: selectedTripData.number_of_places,
                rating: 4,
              };
              navigate(`/trips`, {
                state: {
                  tripData,
                  searchTerm: selectedTripData.title,
                },
              });
            } else {
              console.error("Selected trip not found");
            }
          } else {
            console.log("No trip selected");
          }
        }}
        className="w-[140px] h-[50px] bg-[#8DD3BB] text-[#112211] font-medium text-[14px] rounded mt-10 ml-auto hover:bg-transparent hover:border-[#8DD3BB] hover:border-2 transition duration-300 ease-in-out"
        style={{ fontFamily: "Montserrat" }}
      >
        Search Trips
      </button>
    </div>
  );
};

export default SearchForm;
