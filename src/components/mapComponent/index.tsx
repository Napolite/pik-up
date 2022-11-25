import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
  DirectionsService,
} from "@react-google-maps/api";

function MapComponent() {
  const [response, setResponse] = useState(() => {});
  const directionsCallback = (response: { status: string } | null) => {
    console.log(response);

    if (response !== null) {
      if (response.status === "OK") {
        setResponse(() => ({
          response,
        }));
      } else {
        console.log("response: ", response);
      }
    }
  };
  return (
    <>
      <GoogleMap
        id="map-id"
        zoom={8}
        mapContainerStyle={{
          height: "64px",
          width: "400px",
        }}
        center={{
          lat: 0,
          lng: -180,
        }}
      >
        {
          <DirectionsService
            // required
            options={{
              // eslint-disable-line react-perf/jsx-no-new-object-as-prop
              destination: "19,Opeolu street",
              origin: "University of lagos, Akoka",
              travelMode: google.maps.TravelMode.DRIVING,
            }}
            // required
            callback={() => directionsCallback}
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
        }

        {response !== null && (
          <DirectionsRenderer
            // required
            // options={{ // eslint-disable-line react-perf/jsx-no-new-object-as-prop
            //   directions: response
            // }}
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
    </>
  );
}

export default MapComponent;
