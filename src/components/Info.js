import React from "react";
import profilePic from "../images/tgt_profile_pic_cartoon.jpeg";
import linkedinPic from "../images/linkedin-logo.png";
import emailPic from "../images/email-logo.png";


function Info() {
  return (
    <div className="info-container">
      <img src={profilePic} alt="Touger Thao" className="info-profile-pic" />
      <h1 className="info-name">Touger Thao</h1>
      <h4 className="info-job-title">Smart Contract Developer</h4>
      <h4 className="info-website">
        tougerthao.com
      </h4>
      <div className="info_buttons-container">
        <button className="info-email-btn">
        <img src={emailPic} alt="email button" />
          Email
          </button>
        <button className="info-linkedin-btn">
        <img src={linkedinPic} alt="linkedin button"/>
        LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Info;
