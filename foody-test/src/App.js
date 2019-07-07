import React from "react";
import Header from "./Components/Header";
import RestaurantsData from "./Components/Restaurants-data/RestaurantData";
import "./App.css";
import Maps from "./Components/Maps";

function App() {
  return (
    <div className="App">
      <Header />
      <RestaurantsData />
    </div>
  );
}

export default App;
