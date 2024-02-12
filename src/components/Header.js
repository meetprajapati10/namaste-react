import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);

  // console.log(cartItems);

  return (
    <div className="header">
      <div className="flex justify-between bg-pink-50 shadow-lg">
        <div className="logo-container">
          <img className="w-24" alt="food-logo" src={LOGO_URL} />
        </div>

        <div className="nav-items flex items-center">
          <ul className="flex p-4 m-4">
            <li className="mx-4">
              Online Status: {onlineStatus ? "🟢" : "🔴"}
            </li>
            <li className="mx-4">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="mx-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="mx-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="mx-4 font-bold">
              <Link to="/cart">Cart - ({cartItems.length} items)</Link>
            </li>
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

            <li className="ml-4 font-bold text-lg">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
