import React from "react";
import "./RestaurantCard.css";

export default class RestaurantCard extends React.Component {
  render(props) {
    return (
      <div
        style={{
          backgroundImage: `url(${this.props.restaurant.backgroundImageURL})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "norepeat",
          width: "360px",
          height: "180px",
          margin: "0",
          paddingTop: "50px"
        }}
      >
        <span className="card-text">
          <h3 className="card-name">{this.props.restaurant.name}</h3>
          <h4 className="card-category">{this.props.restaurant.category}</h4>
        </span>
      </div>
    );
  }
}
