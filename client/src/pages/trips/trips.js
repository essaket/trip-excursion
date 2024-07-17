import HeroHeader from "../../components/HeroHeader";
//import FilterSection from "../../components/FilterSection/FilterSection";
import LogoSvg from "../../assets/images/Logo-dark.svg";
import TripSearch from "../../components/TripSearch";

const Trips = () => {
  return (
    <div className="trips-page m-10">
      <HeroHeader imgSrc={LogoSvg} />
      <div className="search-container max-w-100">
        <TripSearch />
      </div>
      <div className="trips-content">
        <div className="filter-section"></div>
        <div className="trip-cards"></div>
      </div>
    </div>
  );
};

export default Trips;
