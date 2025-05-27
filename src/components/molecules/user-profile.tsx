import "./user-profile.css";
import globe from "/globe.svg";
import logout from "/logout.svg";
import profile from "/profile.svg";
import right from "/caret-right.svg";
import Menu from "./mobile-menu";

const UserProfile = () => {
  return (
    <>
      <div className="profile profile--desktop">
        <div className="profile_card">
          <img
            className="profile_card--image"
            src={profile}
            alt="profile picture"
          />
          <p className="profile_card--text">Olakunle Temienor</p>

          <button className="profile_button">
            <img src={right} alt="right arrow" />
          </button>
        </div>

        <button className="profile_button">
          <img width={24} src={globe} alt="globe" />
        </button>

        <button className="profile_button">
          <img width={24} src={logout} alt="logout" />
        </button>
      </div>

      <div className="profile profile--mobile">
        <img
          className="profile_card--image"
          src={profile}
          alt="profile picture"
        />

        <button className="profile_button">
          <img width={24} src={globe} alt="globe" />
        </button>

        <Menu />
      </div>
    </>
  );
};

export default UserProfile;
