import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  console.log("Header render");

  // let btnName = "Login";

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="food-logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
