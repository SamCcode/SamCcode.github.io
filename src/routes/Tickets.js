import anime from "animejs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import "./TicketsStyles.css";
import { useState } from "react";
import RulesAndPolicies from "../components/RulesAndPolicies";
import ParkingAndDirection from "../components/ParkingAndDirtection";
import { IconContext } from "react-icons/lib";
import { IoIosTimer } from 'react-icons/io';

const Tickets = () => {
  const [opened, setOpened] = useState(false);
  const [clickedBtn, setClickedBtn] = useState("");

  const handleClick = (getButtonName) => {
    const name = getButtonName;
    setOpened(!opened);
    setClickedBtn(name);
    goAnimation(name);
  };

  function goAnimation(name) {
    if (name === "pricing" && opened === false) {
      anime({
        targets: ".pricing-section",
        translateX: "109%",
        scale: "1",
        direction: "normal",
        easing: "linear",
        duration: 2000,
        delay: 0,
      });
    }

    if (name === "pricing" && opened === true) {
      anime({
        targets: ".pricing-section",
        translateX: "-100%",
        scale: "1",
        direction: "normal",
        easing: "linear",
        duration: 2000,
        delay: 0,
      });
    }

    if (name === "rules" && opened === false) {
      anime({
        targets: ".rules-section",
        translateY: "132%",
        scale: "1",
        direction: "normal",
        easing: "linear",
        duration: 2000,
        delay: 0,
      });
    }

    if (name === "rules" && opened === true) {
      anime({
        targets: ".rules-section",
        translateY: "-80%",
        scale: "1",
        direction: "normal",
        easing: "linear",
        duration: 2000,
        delay: 0,
      });
    }

    if (name === "parking" && opened === false) {
      anime({
        targets: ".parking-directions",
        translateX: "109%",
        scale: "1",
        direction: "normal",
        easing: "linear",
        duration: 2000,
        delay: 0,
      });
    }

    if (name === "parking" && opened === true) {
      anime({
        targets: ".parking-directions",
        translateX: "-100%",
        scale: "1",
        direction: "normal",
        easing: "linear",
        duration: 2000,
        delay: 0,
      });
    }
  }

  return (
    <div>
      <Navbar />
      <section>
        <div className="introtext">
          <h1>Plan Your Visit</h1>
          <h3>Get Ready for the Fun!</h3>
        </div>
        <img
          src="../../assets/planbackground.jpg"
          alt="themepark"
          className="ticketbackground-img"
        />
      </section>
      <main>
        <div className="plan-btnwrapper">
          <button
            className="plan-btn"
            onClick={() => {
              handleClick("pricing");
            }}
          >
            Pricing and tickets
          </button>
          <button
            className="plan-btn"
            onClick={() => {
              handleClick("rules");
            }}
          >
            Rules and Policies
          </button>
          <button
            className="plan-btn"
            onClick={() => {
              handleClick("parking");
            }}
          >
            Parking and directions
          </button>
        </div>
        <section className="openinghours">
          <div className="timeheader">
        <IconContext.Provider value={{ className: "timelogo" }}>
          <IoIosTimer />
        </IconContext.Provider>
          <h2>Opening Hours</h2></div>
          <div className="openinghours_infowrapper">
            <div className="openinghours_info">
              <h3>Summer Season Hours (May 1st - August 31st):</h3>
              <ul>
                <li>Monday to Friday: 10:00 AM - 8:00 PM</li>
                <li>Saturday and Sunday: 9:00 AM - 9:00 PM</li>
              </ul>
            </div>
            <div className="openinghours_info">
              <h3>Fall Season Hours (September 1st - October 31st):</h3>
              <ul>
                <li>Monday to Friday: 11:00 AM - 6:00 PM</li>
                <li>Saturday and Sunday: 10:00 AM - 7:00 PM</li>
              </ul>
            </div>
            <div className="openinghours_info">
              <h3>Winter Season Hours (November 1st - February 28th):</h3>
              <ul>
                <li>Monday to Friday: 12:00 PM - 6:00 PM</li>
                <li>Saturday and Sunday: 11:00 AM - 7:00 PM</li>
              </ul>
            </div>
            <div className="openinghours_info">
              <h3>Spring Season Hours (March 1st - April 30th):</h3>
              <ul>
                <li>Monday to Friday: 10:00 AM - 7:00 PM</li>
                <li>Saturday and Sunday: 9:00 AM - 8:00 PM</li>
              </ul>
            </div>
          </div>
          <p className="openinghours_infotext">
            Please note that hours may vary on holidays and during special
            events. Be sure to check our event calendar for the most up-to-date
            information.
          </p>
          <Pricing
            className="pricing-section"
            onClick={(button) => handleClick(button)}
          />
          <RulesAndPolicies
            className="rules-section"
            onClick={(button) => handleClick(button)}
          />
          <ParkingAndDirection onClick={(button) => handleClick(button)} />
        </section>
        <section className=""></section>
      </main>
      <Footer />
    </div>
  );
};

export default Tickets;
