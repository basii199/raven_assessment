import { Link } from "react-router-dom";
import "./mobile-menu.css";
import menu from "/menu.svg";
import { useState } from "react";

const Menu = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  return (
    <>
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="profile_button menu"
      >
        <img width={24} src={menu} alt="menu" />

        <div
          className={`menu-dropdown ${
            dropdownOpen ? "" : "menu-dropdown--hidden"
          }`}
        >
          <Link to={"/"} className="dropdown-item">
            Exchange
          </Link>
          <Link to={"/wallets"} className="dropdown-item">
            Wallets
          </Link>
          <Link to={"/roqqu-hub"} className="dropdown-item">
            Roqqu Hub
          </Link>
          <button className="dropdown-item">Log out</button>
        </div>
      </div>

      {dropdownOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setDropdownOpen(false);
          }}
          className="menu-backdrop"
        />
      )}
    </>
  );
};

export default Menu;
