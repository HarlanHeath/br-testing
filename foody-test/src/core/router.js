import React from "react";
import store from "./store";
import { Route, Switch, Redirect } from "react-router-dom";
import App from "../App";
import Details from "../Components/Restaurants-details/RestaurantsDetails";

//Redux store, commented out as it's not complete
// const {restDetails} = store.getState().detailsReducer

export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/details" component={Details} />
  </Switch>
);
