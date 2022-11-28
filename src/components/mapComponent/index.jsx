import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
  DirectionsService,
  useLoadScript,
} from "@react-google-maps/api";

function MapComponent() {
  const [response, setResponse] = useState();
  const { isLoaded, setLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBt4CxOCzVxRLphMzqi5LYaiBmmTb8Y8RE",
  });
  const directionsCallback = (response) => {
    console.log("here reponse", response);

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
      {isLoaded ? (
        <GoogleMap
          id="map-id"
          zoom={12}
          mapContainerStyle={{
            height: "100px",
            width: "400px",
          }}
          center={{
            lat: 6.615356,
            lng: 3.323782,
          }}
        >
          {
            <DirectionsService
              // required
              options={{
                destination: "agege",
                origin: "ikeja",
                travelMode: "WALKING",
              }}
              // required
              callback={directionsCallback}
            />
          }

          {response !== null && (
            <DirectionsRenderer
              // required
              options={{
                directions: response,
              }}
            />
          )}
        </GoogleMap>
      ) : (
        <></>
      )}
    </>
  );
}

export default MapComponent;
