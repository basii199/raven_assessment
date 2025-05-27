import "./header.css";
import Logo from "../atoms/logo";
import VR from "../atoms/vertical-rule.tsx";
import NavTabs from "../molecules/nav.tsx";
import UserProfile from "../molecules/user-profile.tsx";

const Header = () => {
  return (
    <div className="header">
      <Logo variant="white" />
      <VR />
      <NavTabs />
      <UserProfile />
    </div>
  );
};

export default Header;
