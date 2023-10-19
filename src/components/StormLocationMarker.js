import { Icon } from "@iconify/react";
import StormLocationIcon from "@iconify/icons-mdi/storm";

const StormLocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={StormLocationIcon} className="location-icon storm-icon" />
    </div>
  );
};

export default StormLocationMarker;
