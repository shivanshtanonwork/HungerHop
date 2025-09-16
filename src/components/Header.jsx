import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default function Header() {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

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

            <li className="relative group cursor-pointer hover:text-purple-700">
              Cart
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-700 transition-all group-hover:w-full"></span>
            </li>

            {/* Login/Logout Button */}
            <li>
              <button
                onClick={() =>
                  setBtnName(btnName === "Login" ? "Logout" : "Login")
                }
                className="ml-4 px-4 py-2 rounded-lg bg-purple-700 text-white shadow-md hover:bg-purple-800 transition-colors transform hover:-translate-y-0.5"
              >
                {btnName}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
