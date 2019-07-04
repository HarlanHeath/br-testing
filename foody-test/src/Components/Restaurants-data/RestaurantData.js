import React from "react";
import preload from "../../data";
import Header from "../Header"
import RestaurantCard from "../Restaurants-card/RestaurantCard";

const RestaurantData = () => (
  <div className="restaurant-data">
    {preload.restaurants.map(restaurant => (
      <RestaurantCard restaurant={restaurant} />
    ))}
  </div>
);

export default RestaurantData;
