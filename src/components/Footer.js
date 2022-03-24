import React from "react";
import twitPic from "../images/twitter-logo.png";
import fbPic from "../images/facebook-logo.png";
import instaPic from "../images/instagram-logo.png";
import gitPic from "../images/github-logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <img src={twitPic} alt="Twitter link" />
      <img src={fbPic} alt="Facebook link" />
      <img src={instaPic} alt="Instagram link" />
      <img src={gitPic} alt="Github link" />
    </div>
  );
}

export default Footer;
