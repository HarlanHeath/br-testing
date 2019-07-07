import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

export default class Maps extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  render() {
    const MyMapComponent = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: 36.090696, lng: -79.437258 }}
        >
          {props.isMarkerShown && (
            <Marker position={{ lat: 36.090696, lng: -79.437258 }} />
          )}
        </GoogleMap>
      ))
    );

    return (
      <div style={{ width: "35vw", height: "35vh" }}>
        <div className="firstBottom">
          <div className="mapBorder">
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6PQRSS13c1Ts1BTG3KQjfVbEpqpedPbs&callback=initMap"
              loadingElement={
                <div
                  style={{
                    height: `45vh`,
                    width: `40vw`,
                    borderRadius: "12px"
                  }}
                />
              }
              containerElement={
                <div
                  style={{
                    height: `45vh`,
                    width: `40vw`,
                    borderRadius: "12px"
                  }}
                />
              }
              mapElement={
                <div
                  style={{
                    height: `30vh`,
                    width: `20vw`,
                    borderRadius: "12px"
                  }}
                />
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
