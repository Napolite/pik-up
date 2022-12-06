import React, { Component } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
  DirectionsService,
} from "@react-google-maps/api";

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: "6.605874, 3.349149",
      destination: "6.446984, 3.411985",
      response: null,
      travelMode: "DRIVING",
      apiKey: "",
    };
  }

  componentDidMount() {
    this.setState({ apiKey: "AIzaSyBt4CxOCzVxRLphMzqi5LYaiBmmTb8Y8RE" });
  }

  //   componentDidUpdate() {
  //     this.setState({ apiKey: "AIzaSyBt4CxOCzVxRLphMzqi5LYaiBmmTb8Y8RE" });
  //   }

  directionsCallback = (response) => {
    console.log(response);

    if (response !== null) {
      if (response.status === "OK") {
        this.setState({ response: response });
      } else {
        console.log("response: ", response);
      }
    }
  };

  render() {
    console.log(this.state);
    return (
      <LoadScript googleMapsApiKey={this.state.apiKey}>
        <GoogleMap
          // required
          id="direction-example"
          // required
          mapContainerStyle={{
            height: "100px",
            width: "100%",
          }}
          // required
          zoom={14}
          // required
          center={{
            lat: 6.605874,
            lng: 3.349149,
          }}
          // optional
          // optional
          onLoad={(map) => {
            console.log("DirectionsRenderer onLoad map: ", map);
          }}
          // optional
          onUnmount={(map) => {
            console.log("DirectionsRenderer onUnmount map: ", map);
          }}
        >
          {this.state.destination !== "" && this.state.origin !== "" && (
            <DirectionsService
              // required
              options={{
                destination: this.state.destination,
                origin: this.state.origin,
                travelMode: this.state.travelMode,
              }}
              // required
              callback={this.directionsCallback}
              // optional
              onLoad={(directionsService) => {
                console.log(
                  "DirectionsService onLoad directionsService: ",
                  directionsService
                );
              }}
              // optional
              onUnmount={(directionsService) => {
                console.log(
                  "DirectionsService onUnmount directionsService: ",
                  directionsService
                );
              }}
            />
          )}

          {this.state.response !== null && (
            <DirectionsRenderer
              // required
              options={{
                directions: this.state.response,
              }}
              // optional
              onLoad={(directionsRenderer) => {
                console.log(
                  "DirectionsRenderer onLoad directionsRenderer: ",
                  directionsRenderer
                );
              }}
              // optional
              onUnmount={(directionsRenderer) => {
                console.log(
                  "DirectionsRenderer onUnmount directionsRenderer: ",
                  directionsRenderer
                );
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default MapComponent;
