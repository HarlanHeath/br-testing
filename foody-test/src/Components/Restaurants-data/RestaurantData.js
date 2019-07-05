import React from "react";
import preload from "../../data";
import Header from "../Header";
import { connect } from "react-redux";
import RestaurantCard from "../Restaurants-card/RestaurantCard";

const RestaurantData = () => (
  <div className="restaurant-data">
    {preload.restaurants.map(restaurant => (
      <RestaurantCard restaurant={restaurant} />
    ))}
  </div>
);

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  setDetails(details) {
    dispatch({
      type: "SET_DETAILS",
      payload: details
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantData);
