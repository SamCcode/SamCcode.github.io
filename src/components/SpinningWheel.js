import "./SpinningWheelStyles.css";
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

function SpinningWheel(props) {
  const wheelRef = useRef(null);
  const spinningAnimation = useRef(null);
  const [displayText, setDisplayText] = useState("Spin to win!");

  useEffect(() => {
    if (props.startSpin) {
      anime({
        targets: ".wheelwrapper",
        translateX: "278%",
        rotate: "1turn",
        scale: "1",
        direction: "normal",
        easing: "linear",
        opacity: "1",
        duration: 2000,
        delay: 0,
      });
    }
  }, [props.startSpin]);

  const startSpinningAnimation = () => {
    if (spinningAnimation.current) {
      spinningAnimation.current.pause();
    }

    const totalDuration = 5000;
    const rotations = 5;
    const rotateAngle = 360 * rotations;
    const customEasing = "cubicBezier(0.25, 0.1, 0.25, 1)";

    spinningAnimation.current = anime({
      targets: wheelRef.current,
      rotate: rotateAngle + "deg",
      duration: totalDuration,
      easing: customEasing,
      begin: function () {
        anime({
          targets: ".spinning-text",
          opacity: 0,
          duration: 3000,
        });
      },
      complete: function () {
        anime({
          targets: ".spinning-text",
          opacity: 1,
          duration: 3000,
        });
        setDisplayText(
          <>
            Congratulations! <br /> Use the code: Teddy <br /> to collect your
            free bear!{" "}
          </>
        );

        const spinningText = document.querySelector(".spinning-text");
        spinningText.style.position = "absolute";
        spinningText.style.top = "25%";
        spinningText.style.left = "33%";
        spinningText.style.color = "black";

        setTimeout(() => {
          anime({
            targets: ".wheelwrapper",
            opacity: [1, 0],
            duration: 4000,
            easing: "easeOutQuad",
            begin: function (anim) {
              document.querySelector(".wheelwrapper").style.opacity = "1";
            },
            complete: function (anim) {
              document.querySelector(".wheelwrapper").style.opacity = "0";
              document.querySelector(".wheelwrapper").style.display = "none";
            },
          });
        }, 3000);
      },
    });
  };

  return (
    <div className="wheelwrapper" style={{ opacity: "0" }}>
      <h3 className="spinning-text">{displayText}</h3>
      <div className="arrow"></div>
      <ul className="wheel" ref={wheelRef}>
        <li className="wheel__item">
          <p className="wheel__text">Free food!</p>
        </li>
        <li className="wheel__item">
          <p className="wheel__text">Ticketdiscount!</p>
        </li>
        <li className="wheel__item">
          <p className="wheel__text">Teddybear!</p>
        </li>
        <li className="wheel__item">
          <p className="wheel__text">Free food!</p>
        </li>
        <li className="wheel__item">
          <p className="wheel__text">Ticketdiscount!</p>
        </li>
        <li className="wheel__item">
          <p className="wheel__text">Teddybear!</p>
        </li>
        <li className="wheel__item">
          <p className="wheel__text">Free food!</p>
        </li>
        <li className="wheel__item">
          <p className="wheel__text">Ticketdiscount!</p>
        </li>
        <li className="wheel__item">
          <p className="wheel__text">Teddybear!</p>
        </li>
        <li className="wheel__item">
          <p className="wheel__text">Free food!</p>
        </li>
        <li className="wheel__item">
          <p className="wheel__text">Ticketdiscount!</p>
        </li>
        <li className="wheel__item">
          <p className="wheel__text">Teddybear!</p>
        </li>
      </ul>
      <button className="spin-btn" onClick={startSpinningAnimation}>
        SPIN
      </button>
    </div>
  );
}

export default SpinningWheel;
