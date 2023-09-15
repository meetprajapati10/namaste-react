import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

// Header component for header section: Logo, Nav Items
const Header = () => {
  // let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");

  console.log("Header render");

  // if no dependency array => useEffect is called on after every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is Updated
  // useEffect(() => {
  //   console.log("useEffect Called");
  // }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="food-logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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
