import React from "react";
import starImage from "../images/star.png";

function Card(props) {
  return (
    <div className="card-container">
      <img
        src={`../images/${props.img}`}
        alt="Swimmer"
        className="card-swimmer-image"
      />
      <div className="card-rating-container">
        <img src={starImage} alt="Star" className="card-star-image" />
        <span className="card-rating">{props.rating}</span>
        <span className="card-reviews">({props.reviews}) • </span>
        <span className="card-location">{props.location}</span>
      </div>
      <p className="card-event-info">{props.event_info}</p>
      <p className="card-pricing-per-person">
        <span className="card-pricing-text">From ${props.pricing}</span>/ person
      </p>
    </div>
  );
}

export default Card;
