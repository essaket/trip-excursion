import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroHeader from "../../components/HeroHeader";
import LogoSvg from "../../assets/images/Logo-dark.svg";
import TripSearch from "../../components/TripSearch";
import TripCard from "../../components/TripCard";
//import TripImg1 from "../../assets/images/newBook2.png";

const Trips = () => {
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const response = await fetch("/api/trips");
      const data = await response.json();
      const tripsWithImages = data.map((trip) => ({
        ...trip,
        imageSrc: require(`../../assets/images/${
          trip.title.split(",")[0]
        }.png`),
      }));
      setTrips(tripsWithImages);
      setFilteredTrips(tripsWithImages);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };

  const handleSearch = (searchTerm) => {
    const filtered = trips.filter((trip) =>
      trip.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTrips(filtered);
  };

  return (
    <div className="trips-page m-10">
      <Link to="/Home">
        <HeroHeader imgSrc={LogoSvg} />
      </Link>
      <div className="search-container max-w-100">
        <TripSearch onSearch={handleSearch} />
      </div>
      <div className="trips-content">
        <div className="filter-section"></div>
        <div className="trip-cards grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTrips.map((trip) => (
            <TripCard
              key={trip.trip_id}
              imageSrc={trip.imageSrc}
              title={trip.title}
              activities={trip.number_of_places}
              price={trip.price}
              accommodations={trip.accommodations}
              restaurants={trip.restaurants}
              itinerary={trip.itinerary}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trips;
