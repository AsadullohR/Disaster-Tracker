import React from "react";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import fireLocationIcon from "@iconify/icons-mdi/fire-alert";

const FireLocationMarker = ({ lat, lng, onClick }) => {
  const mapRef = useRef(null);

  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={fireLocationIcon} className="location-icon" />
      {/* mapRef.current.setCenter({(lat, lng)}) */}
    </div>
  );
};

export default FireLocationMarker;
