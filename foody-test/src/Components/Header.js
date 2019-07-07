import React from "react";
import mapIcon from "../Cuts/icon_map@2x.png";
import backIcon from "../Cuts/ic_webBack@2x.png";
import "./Header.css";

const Header = () => (
  <div className="header-main">
    <img src={backIcon} alt="back arrow" className="arrow-icon" />
    <h1>Lunch Tyme</h1>
    <img src={mapIcon} alt="map icon" className="map-icon" />
  </div>
);

export default Header;
