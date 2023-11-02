import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import "./ParkingAndDirectionStyles.css";

const ParkingAndDirection = (props) => {
  return (
    <div className="parking-directions">
      <div className="parkingheader">
        <h2>Parking and Directions</h2>
        <a onClick={() => props.onClick("parking")}>
          <IconContext.Provider value={{ className: "closinglogo" }}>
            <AiOutlineClose />
          </IconContext.Provider>
        </a>
      </div>
      <div className="parking-info">
        <h3>Parking Information</h3>
        <p>We offer ample parking space for our visitors.</p>
        <p>Address: 123 Theme Park Way, City, State ZIP</p>
      </div>
      <div className="directions">
        <h3>Directions</h3>
        <p>If you're coming by car, follow these directions:</p>
        <ul>
          <li>Take Highway X and exit at Exit Y</li>
          <li>Follow the signs to the theme park</li>
        </ul>
        <p>If you're using public transportation, here are the options:</p>
        <ul>
          <li>Take the subway to Station Z and transfer to Bus A</li>
          <li>Bus A will drop you off near the theme park entrance</li>
        </ul>
      </div>
      <button className="plan-btn" onClick={() => props.onClick("parking")}>
        Go Back
      </button>
    </div>
  );
};

export default ParkingAndDirection;
