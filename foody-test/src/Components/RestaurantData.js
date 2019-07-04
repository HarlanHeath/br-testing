import React, { Component } from "react";
import RestaurantList from "./RestaurantList";
import preload from "../data";

export default class Home extends Component {
  render() {
    return (
      <div>
        {preload.restaurants.map(restaurant => (
          <RestaurantList restaurant={restaurant} />
        ))}
      </div>
    );
  }
}
