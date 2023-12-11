import { Icon } from "@iconify/react";
import fireLocationIcon from "@iconify/icons-mdi/fire-alert";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Icon icon={fireLocationIcon} />
        Global Disaster Tracker (Powered by NASA)
      </h1>
    </div>
  );
};

export default Header;
