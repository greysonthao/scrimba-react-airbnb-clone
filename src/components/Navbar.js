import React from "react";
import airbnbLogo from "../images/airbnb-logo.png";

function Navbar() {
  return (
    <nav className="navbar-container">
      <img src={airbnbLogo} alt="AirBnB logo" className="navbar-logo" />
    </nav>
  );
}

export default Navbar;
