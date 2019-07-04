import React from "react";

export default function RestaurantList(props) {
  return (
    <div style={{ backgroundImage: props.restaurant.backgroundImageURL }}>
      {/* <img
        src={props.restaurant.backgroundImageURL}
        alt={props.restaurant.name}
        style={{ width: "100vw" }}
      /> */}
      <h3>{props.restaurant.name}</h3>
      <h4>{props.restaurant.category}</h4>
    </div>
  );
}
