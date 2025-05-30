import { Link, useLocation } from "react-router-dom";
import "./nav.css";

const NavTabs = () => {
  const location = useLocation().pathname;

  const getActive = (tab: string) => {
    if (tab === "") {
      return location === "/" ? "nav_text--active" : "";
    }
    return location.includes(tab) ? "nav_text--active" : "";
  };

  return (
    <div className="nav">
      <Link to={"/"} className={`nav_text ${getActive("")} `}>
        Exchange
      </Link>
      <Link to={"/wallets"} className={`nav_text ${getActive("wallets")} `}>
        Wallets
      </Link>
      <Link to={"/roqqu-hub"} className={`nav_text ${getActive("roqqu-hub")} `}>
        Roqqu Hub
      </Link>
    </div>
  );
};

export default NavTabs;
