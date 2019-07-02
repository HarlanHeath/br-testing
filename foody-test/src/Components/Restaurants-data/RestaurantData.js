import React from "react";
import preload from "../../data";
import RestaurantCard from "../Restaurants-card/RestaurantCard";

const RestaurantData = () => (
  <div>
    {preload.restaurants.map(restaurant => (
      <RestaurantCard restaurant={restaurant} />
    ))}
  </div>
);

export default RestaurantData;
