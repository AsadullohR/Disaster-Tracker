import React from "react";
import { useState } from "react";
// import GoogleMapReact from "google-map-react";
import GoogleMapReact from "google-maps-react-markers";

import FireLocationMarker from "./FireLocationMarker";
import VolcanoLocationMarker from "./VolcanoLocationMarker";
import StormLocationMarker from "./StormLocationMarker";
import IcebergLocationMarker from "./IcebergLocationMarker";
import LocationInfoBox from "./LocationInfoBox";

// define constants
const WILDFIRE = 8;
const VOLCANO = 12;
const STORM = 10;
const ICEBERG = 15;

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const fireMarkers = eventData.map((ev, index) => {
    if (ev.categories[0].id === WILDFIRE) {
      return (
        <FireLocationMarker
          key={index}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => {
            setLocationInfo({ id: ev.id, title: ev.title });
          }}
        />
      );
    }
    return null;
  });

  const volcanoMarkers = eventData.map((ev, index) => {
    if (ev.categories[0].id === VOLCANO) {
      return (
        <VolcanoLocationMarker
          key={index}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => {
            setLocationInfo({ id: ev.id, title: ev.title });
          }}
        />
      );
    }
    return null;
  });

  const stormMarkers = eventData.map((ev, index) => {
    if (ev.categories[0].id === STORM) {
      return (
        <StormLocationMarker
          key={index}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => {
            setLocationInfo({ id: ev.id, title: ev.title });
          }}
        />
      );
    }
    return null;
  });

  const icebergMarkers = eventData.map((ev, index) => {
    if (ev.categories[0].id === ICEBERG) {
      return (
        <IcebergLocationMarker
          key={index}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => {
            setLocationInfo({ id: ev.id, title: ev.title });
          }}
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        apiKey="AIzaSyCqq1z2LN-2XGMkca1mAZPGBxfr3O_IICk"
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {fireMarkers}
        {volcanoMarkers}
        {stormMarkers}
        {icebergMarkers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
