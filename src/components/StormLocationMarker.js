import { Icon } from "@iconify/react";
import StormLocationIcon from "@iconify/icons-mdi/dust-storm";

const StormLocationMarker = ({ onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={StormLocationIcon} className="location-icon storm-icon" />
    </div>
  );
};

export default StormLocationMarker;
