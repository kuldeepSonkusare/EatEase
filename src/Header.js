import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "./useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginStatus, setloginStatus] = useState("Login");
  const { loggedInuser, setUserName } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  const onlineStatus = UseOnlineStatus(UseOnlineStatus);
  return (
    <div className="flex flex-row justify-between  border border-slate-300 rounded-xl shadow-md">
      <img
        className=" h-24 w-28"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/91631e116794391.60698dbc55f96.jpg"
        alt=""
      />

      <ul className="flex flex-row m-4 p-2">
        <li>
          <button
            className="p-2 border bg-slate-100 rounded-lg"
            onClick={() => {
              loginStatus === "Login"
                ? setloginStatus("Logout")
                : setloginStatus("Login");
            }}
          >
            {loginStatus}
          </button>
        </li>
        <li className="p-2">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2 ">
          <Link to="/about">About Us</Link>{" "}
        </li>
        <li className="p-2 ">
          <Link to="/contact">Contact Us</Link>{" "}
        </li>
        <li className="p-2">
          {" "}
          Online Status :-
          {onlineStatus === true ? "✅" : "🔴"}
        </li>
        <li className="p-2 ">
          <Link to="/cart">
            🛒
            ({cartItems.length} Items)
          </Link>
        </li>
        <li>{loggedInuser}</li>
      </ul>
    </div>
  );
};

export default Header;
