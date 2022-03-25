import React from "react";
import swimmerImage from "../images/swimmer.png";
import starImage from "../images/star.png";

function Card() {
  return (
    <div className="card-container">
      <img src={swimmerImage} alt="Swimmer" className="card-swimmer-image" />
      <div className="card-rating-section">
        <img src={starImage} alt="Star" className="card-star-image" />
        <span className="card-rating">5.0</span>
        <span className="card-reviews">(6) • </span>
        <span className="card-location">USA</span>
      </div>
      <p className="card-event-info">Life lessons with Katie Zaferes</p>
      <div className="card-pricing-container">
        <p className="card-pricing-per-person">
          <span className="card-pricing-text">From $136</span>/ person
        </p>
      </div>
    </div>
  );
}

export default Card;
