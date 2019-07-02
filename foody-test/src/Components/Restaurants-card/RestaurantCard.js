import React from "react";

const RestaurantCard = props => (
  <div style={{ width: "100vw" }}>
    <img
      alt="restaurant preview image"
      src={props.restaurant.backgroundImageURL}
    />
    <div>
      <h3>{props.restaurant.name}</h3>
      <h4>{props.restaurant.category}</h4>
    </div>
  </div>
);

export default RestaurantCard;
