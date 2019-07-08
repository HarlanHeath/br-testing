import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import RestaurantsData from "./Components/Restaurants-data/RestaurantData";
import RestaurantDetails from "./Components/Restaurants-details/RestaurantsDetails";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={RestaurantsData} />
        </Switch>
        <Switch>
          <Route path="/details" component={RestaurantDetails} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
