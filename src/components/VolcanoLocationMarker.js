import { Icon } from "@iconify/react";
import volcanoLocationIcon from "@iconify/icons-mdi/volcano";

const VolcanoLocationMarker = ({ onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={volcanoLocationIcon} className="location-icon volcano-icon" />
    </div>
  );
};

export default VolcanoLocationMarker;
