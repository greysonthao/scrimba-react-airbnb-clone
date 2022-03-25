import React from "react";
import starImage from "../images/star.png";

function Card(props) {
  let badgeText;

  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card-container">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        src={`../images/${props.item.coverImg}`}
        className="card-event-image"
        alt="event"
      />
      <div className="card-rating-container">
        <img src={starImage} alt="Star" className="card-star-image" />
        <span className="card-rating">{props.item.stats.rating}</span>
        <span className="card-reviews">
          ({props.item.stats.reviewCount}) •{" "}
        </span>
        <span className="card-location">{props.item.location}</span>
      </div>
      <p className="card-event-info">{props.item.description}</p>
      <p className="card-pricing-per-person">
        <span className="card-pricing-text">From ${props.item.price}</span>/
        person
      </p>
    </div>
  );
}

export default Card;
