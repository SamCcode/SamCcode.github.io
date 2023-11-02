

import { ridesMenu } from "../database/RidesData";
import "./RidesStyles.css";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import anime from "animejs";

const Rides = () => {
  const [filter, setFilter] = useState("");
  const allRides = ridesMenu;

  const filteredRides = allRides.filter((item) => {
    if (filter === "") {
      return true;
    } else {
      return item.category === filter;
    }
  });

  const handleClick = (newFilter) => {
    const wrapper = document.querySelector(".ridescardwrapper");

    anime({
      targets: wrapper,
      opacity: 0,
      duration: 800,
      easing: "linear",
      complete: () => {
        setFilter(newFilter);
        anime({
          targets: wrapper,
          opacity: 1,
          duration: 800,
          easing: "linear",
        });
      },
    });
  };

  return (
    <div>
      <Navbar />
      <section>
        <div className="introtext">
          <h1>Have a look at our rides!</h1>
          <h3>Do you dare to try them all?</h3>
        </div>
        <img
          src="../../assets/ridesbackground.jpg"
          alt="themepark"
          className="background-img"
        />
      </section>
      <main>
        <div className="buttonwrapper">
          <button
            onClick={() => handleClick("")}
            className={filter === "" ? "active" : "rides-btn"}
          >
            Show all
          </button>
          <button
            onClick={() => handleClick("family")}
            className={filter === "family" ? "active" : "rides-btn"}
          >
            Family rides
          </button>
          <button
            onClick={() => {
              handleClick("kids");
            }}
            className={filter === "kids" ? "active" : "rides-btn"}
          >
            Kids rides
          </button>
          <button
            onClick={() => {
              handleClick("thrill");
            }}
            className={filter === "thrill" ? "active" : "rides-btn"}
          >
            Thrill rides
          </button>
        </div>
        <section className="ridescardwrapper">
          {filteredRides.map((item) => (
            <>
              <Card
                header={item.name}
                text={item.description}
                img={item.imageUrl}
                key={item.id}
                buttonStyle="nobutton"
                className="card__stylethree"
              />
            </>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rides;
