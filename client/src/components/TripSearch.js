import React from "react";
import PropTypes from "prop-types";
import SendSvg from "../assets/images/Send.svg";

function TripSearch(props) {
  return (
    <section
      className={`trip-search m-9 flex flex-col bg-white rounded-2xl shadow-[0px_4px_16px_0px_rgba(17,34,17,0.047)] ${
        props.className || ""
      }`}
    >
      {/* Root section containing travel information */}

      <div className="sm:flex-row sm:items-center sm:gap-y-[30px] w-[96.14%] flex justify-between gap-x-2.5 max-w-[1184.5px] my-8 mx-auto">
        {/* Flex row for travel information */}

        <div className="sm:w-full sm:min-w-[unset] flex flex-col bg-white rounded outline outline-[rgb(121,116,126)] outline-1 outline-offset-[-1px] w-[344px] relative min-w-0">
          {/* Destination information box */}
          <input
            type="text"
            className="sm:w-[85%] sm:my-[18px] sm:mx-auto flex items-center font-normal text-[16px] focus:outline-none leading-tight font-Montserrat text-[rgb(28,27,31)] w-[127px] relative max-w-[85%] mt-[14px] mb-[14px] ml-[10.95%]"
          >
            {/* Highlighted destination text */}
          </input>
          <span className="flex justify-center font-normal text-[14px] leading-[1.21] font-Montserrat text-[rgb(28,27,31)] text-center bg-white w-[132px] h-[17px] pr-1 pl-1 absolute left-[12.21875px] top-[-8px]">
            {/* TODO */}
            Enter Destination
          </span>
        </div>

        <div className="sm:w-full sm:min-w-[unset] flex flex-col bg-white rounded outline outline-[rgb(121,116,126)] outline-1 outline-offset-[-1px] w-[388px] relative min-w-0">
          {/* Date information box */}
          <input
            type="Date"
            className="sm:w-[85%] tn:mt-[18px] tn:mr-0 tn:mb-[18px] tn:ml-2 flex items-center font-normal text-[16px] leading-tight font-Montserrat text-[rgb(28,27,31)] tracking-[-1.1px] w-[55px] relative max-w-[85%] mt-[18px] mb-[18px] ml-4"
          ></input>
          <div className="bg-white w-[70px] h-[17px] pr-1 pl-1 absolute left-[12.25px] top-[-8px]" />
          {/* Call-to-action buttons container */}
          <span className="flex justify-center font-normal text-[14px] leading-[1.21] font-Montserrat text-[rgb(28,27,31)] text-center bg-white w-[132px] h-[17px] pr-1 pl-1 absolute left-[12.21875px] top-[-8px]">
            {/* TODO */}
            Select Trip Date
          </span>
        </div>

        <button className="sm:w-full sm:min-w-[unset] flex flex-row bg-[rgb(141,211,187)] rounded  min-w-0">
          {/* Box containing travel related image */}
          <div className="mx-8 my-auto">Search</div>
          <img className="w-6 h-6 my-4 mx-2" src={SendSvg} alt="Send Svg" />
        </button>
      </div>
    </section>
  );
}

TripSearch.propTypes = {
  className: PropTypes.string,
};

export default TripSearch;
