import React from "react";
import { Link } from "react-router-dom";
import "./RestaurantCard.css";

export default class RestaurantCard extends React.Component {
  render(props) {
    return (
      // <Router>
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
        <Link to="/Details">
          <span className="card-text">
            <h3 className="card-name">{this.props.restaurant.name}</h3>
            <h4 className="card-category">{this.props.restaurant.category}</h4>
          </span>
        </Link>
      </div>
      // </Router>
    );
  }
}
