import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">AdventureWorld</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-menu__item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-menu__item">
          <Link to="/rides">Rides</Link>
        </li>
        <li className="nav-menu__item">
          <Link to="/tickets">Tickets</Link>
        </li>
        <li className="nav-menu__item">
          <Link to="/events">Events</Link>
        </li>
        <li className="nav-menu__item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
