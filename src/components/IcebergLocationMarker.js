import { Icon } from "@iconify/react";
import icebergLocationIcon from "@iconify/icons-openmoji/iceberg";

const IcebergLocationMarker = ({ onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={icebergLocationIcon} className="location-icon iceberg-icon" />
    </div>
  );
};

export default IcebergLocationMarker;
