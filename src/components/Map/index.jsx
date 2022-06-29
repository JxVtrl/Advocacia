import React, { useState, useCallback } from "react";
import {
  GoogleMap, 
  useJsApiLoader,
} from "@react-google-maps/api";

import { Load } from "../Load";

const center = {
  lat: -22.98225,
  lng: -43.21686,
};

export function Map() {
    const [map, setMap] = useState(null);

    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyBN85UeJ8L7UorGbA1DruilQ-yVWI1-9CI",
    });

    const onMapLoad = (map) => {
      setMap(map);
    };

    const onUnmount = useCallback(function callback(map) {
    setMap(null);
    }, []);

    return (
      isLoaded ? (
        <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "400px",
            }}
            center={center}
            zoom={12}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
              mapTypeControl: true,
              maxZoom: 18,
              minZoom: 10,
              clickableIcons: false,
              mapTypeId: 'satellite',
            }}
            onLoad={onMapLoad}
            onUnmount={onUnmount}
        />
      ) : <Load />
    );
}
