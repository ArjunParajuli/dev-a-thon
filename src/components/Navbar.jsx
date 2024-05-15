import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoBedOutline } from "react-icons/io5";
import { CiPlane } from "react-icons/ci";
import { FaCar } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { GiCruiser } from "react-icons/gi";
import { MdOutlineAttractions } from "react-icons/md";
import { RiTaxiWifiFill } from "react-icons/ri";

const Navbar = () => {
  const [active, setActive] = useState("Stays");

  const clickHandler = (currClass) => {
    setActive(currClass);
  };

  return (
    <div className="nav">
      <Link
        to="/stays"
        className={`nav-btn ${active === "Stays" && "active"}`}
        onClick={() => clickHandler("Stays")}
      >
        <IoBedOutline /> Stays
      </Link>
      <Link
        to="/flights"
        className={`nav-btn ${active === "Flights" && "active"}`}
        onClick={() => clickHandler("Flights")}
      >
        <CiPlane /> Flights
      </Link>
      <Link
        to="/flights-hotels"
        className={`nav-btn ${active === "FlightsHotels" && "active"}`}
        onClick={() => clickHandler("FlightsHotels")}
      >
        <IoMdGlobe /> Flight + Hotel
      </Link>
      <Link
        to="/rentals"
        className={`nav-btn ${active === "Rentals" && "active"}`}
        onClick={() => clickHandler("Rentals")}
      >
        <FaCar /> Car Rentals
      </Link>
      <Link
        to="/cruises"
        className={`nav-btn ${active === "Cruises" && "active"}`}
        onClick={() => clickHandler("Cruises")}
      >
        <GiCruiser /> Cruises
      </Link>
      <Link
        to="/attractions"
        className={`nav-btn ${active === "Attractions" && "active"}`}
        onClick={() => clickHandler("Attractions")}
      >
        <MdOutlineAttractions /> Attractions
      </Link>
      <Link
        to="/taxis"
        className={`nav-btn ${active === "Taxis" && "active"}`}
        onClick={() => clickHandler("Taxis")}
      >
        <RiTaxiWifiFill /> Airport Taxis
      </Link>
    </div>
  );
};

export default Navbar;
