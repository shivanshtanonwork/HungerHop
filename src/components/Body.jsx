import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const { listOfRestaurants, filteredRestaurant, setFilteredRestaurant } =
    useRestaurantList(); // custom hook

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1 className="text-center mt-10 text-xl font-semibold text-red-600">
        Looks like you are offline. Please check your internet connection
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Search + Filter Wrapper */}
      <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
        {/* Search Box */}
        <input
          type="text"
          className="w-64 px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
          className="px-4 py-2 rounded-lg bg-purple-700 text-white shadow-md hover:bg-purple-800 transition-colors transform hover:-translate-y-0.5"
        >
          Search
        </button>

        {/* Top Rated Button */}
        <button
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white transition-colors transform hover:-translate-y-0.5"
          onClick={() => {
            const filteredList = filteredRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          ⭐ Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
            className="no-underline text-inherit"
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
