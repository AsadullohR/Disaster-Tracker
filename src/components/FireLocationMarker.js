import { Icon } from "@iconify/react";
import fireLocationIcon from "@iconify/icons-mdi/fire-alert";

const FireLocationMarker = ({ onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={fireLocationIcon} className="location-icon" />
    </div>
  );
};

export default FireLocationMarker;
