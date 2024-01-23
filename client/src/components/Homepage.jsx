import React from "react";
import "./Homepage.css";
import founder from "../assets/founder.jpeg";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepageContainer">
        <div className="founderphoto">
          <img src={founder} alt="founder photo" className="photo" />
        </div>
        <div className="motive">
          <p>
            Crafting Captivating Spaces, Building Dreams That Endure
            Impressions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
