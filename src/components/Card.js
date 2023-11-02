import { useRef, useState } from "react";
import "./CardStyles.css";
import anime from "animejs";

const Card = (card) => {
  const [isExpanded, setIsExpanded] = useState(true);
  // const [isExpandedTextVisible, setIsExpandedTextVisible] = useState(false);
  const cardRef = useRef(null);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);

    const cardElement = cardRef.current;
    if (isExpanded) {
      // setTimeout(() => {
      //   setIsExpandedTextVisible(true); // Set a state variable to control the visibility of expanded text
      // }, 500);
      anime({
        targets: cardElement,

        height: "35rem",
        duration: 600,
        easing: "easeInOutQuad",
      });
    } else {
      anime({
        targets: cardElement,
        height: "23rem",
        width: "18rem",
        duration: 600,
        easing: "easeInOutQuad",
      });
    }
  };
  return (
    <div
      className={`card ${isExpanded ? "expanded" : ""} ${card.className}`}
      ref={cardRef}
      onClick={card.clickable ? handleExpand : card.onClick}
    >
      <img src={card.img} alt={card.header} className="card-image" />
      <h2 className="card-header">{card.header}</h2>

      <p className={`card-text ${isExpanded ? "visible" : "hidden"}`}>
        {card.text}
      </p>
      <p className={`card-text ${isExpanded ? "hidden" : "visible"}`}>
        {card.expandedtext}
      </p>
      <button className={`button ${card.buttonStyle}`} onClick={card.onClick}>
        <span>{card.button}</span>
      </button>
    </div>
  );
};

export default Card;
