import React from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
  DirectionsService,
  useLoadScript,
} from "@react-google-maps/api";

function MapComponent() {
  const [response, setResponse] = useState();
  const [update, setUpdate] = useState();
  const { isLoaded, setLoaded } = useLoadScript({});

  const onLoad = (maps) => {
    const google = window.google;
    if (google) {
      const directionsService = new google.maps.DirectionsService();
      console.log("loaded at least");
      directionsService.route(
        {
          destination: "6.605874, 3.349149",
          origin: "oworoshonki",
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setResponse(result);
            console.log("success fetching directions", result, status);
          } else {
            console.error("error fetching directions", result, status);
          }
        }
      );
    }
  };

  // const directionsCallback = (response) => {
  //   console.log("here reponse", response);

  //   if (response !== null) {
  //     if (response.status === "OK") {
  //       console.log("reponse 1", response);
  //       setResponse(response);
  //     } else {
  //       console.log("response: ", response);
  //     }
  //   }
  // };

  useEffect(() => {
    onLoad();
  });
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
            lat: 0,
            lng: 0,
          }}
          // onLoad={onLoad}
        >
          <DirectionsService
            // required
            options={{
              destination: new window.google.maps.LatLng(6.605874, 3.349149),
              origin: new window.google.maps.LatLng(6.446984, 3.411985),
              travelMode: "WALKING",
            }}
            // required
            // callback={directionsCallback}
            // onLoad={onLoad}
          />

          {response !== null && (
            <DirectionsRenderer
              // required
              options={{
                directions: response,
              }}
              onLoad={() => console.log("here service response", response)}
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
