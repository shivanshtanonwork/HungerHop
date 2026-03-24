import { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export default function Header() {
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  //Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="flex items-center justify-center gap-10 px-8 h-20">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="w-18 object-contain cursor-pointer transition-transform duration-200 hover:scale-105"
            src={LOGO_URL}
            alt="logo"
          />
        </div>

        {/* Nav Items */}
        <div className="flex items-center">
          <ul className="flex items-center gap-8 text-[15.5px] font-medium text-gray-700">
            <li>Online status: {onlineStatus ? "✅" : "🔴"}</li>

            <li className="relative group">
              <Link to="/" className="hover:text-purple-700 transition-colors">
                Home
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-700 transition-all group-hover:w-full"></span>
            </li>

            <li className="relative group">
              <Link
                to="/about"
                className="hover:text-purple-700 transition-colors"
              >
                About
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-700 transition-all group-hover:w-full"></span>
            </li>

            <li className="relative group">
              <Link
                to="/contact"
                className="hover:text-purple-700 transition-colors"
              >
                Contact Us
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-700 transition-all group-hover:w-full"></span>
            </li>

            <li className="relative group">
              <Link
                to="/grocery"
                className="hover:text-purple-700 transition-colors"
              >
                Grocery
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-700 transition-all group-hover:w-full"></span>
            </li>

            <li className="relative group cursor-pointer hover:text-purple-700 font-bold">
              <Link to="/cart">🛒 Cart ({cartItems.length} items)</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-700 transition-all group-hover:w-full"></span>
            </li>

            <li>
              <Link
                to="/auth"
                className="ml-4 inline-block rounded-lg bg-purple-700 px-4 py-2 text-white shadow-md transition-colors hover:bg-purple-800"
              >
                Login / Signup
              </Link>
            </li>
            <li className="relative group cursor-pointer hover:text-purple-700">
              {loggedInUser}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-700 transition-all group-hover:w-full"></span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
