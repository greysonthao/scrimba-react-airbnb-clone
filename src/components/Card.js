import React from "react";
import swimmerImage from "../images/swimmer.png";
import starImage from "../images/star.png";

function Card() {
  return (
    <section className="card-container">
      <img src={swimmerImage} alt="Swimmer" className="card-swimmer-image" />
      <div className="card-rating-section">
        <img src={starImage} alt="Star" className="card-star-image" />
        <p className="card-rating">5.0</p>
        <p className="card-reviews-location">(6) · USA</p>
      </div>
      <p className="card-event-info">Life lessons with Katie Zaferes</p>
      <div className="card-pricing-container">
        <p className="card-pricing-text">From $136</p>
        <p className="card-pricing-per-person">/ person</p>
      </div>
    </section>
  );
}

export default Card;
