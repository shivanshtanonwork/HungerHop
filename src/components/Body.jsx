import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // State Variable - Super powerful variable
  const { listOfRestaurants, filteredRestaurant, setFilteredRestaurant } =
    useRestaurantList(); //custom hook

  const [searchText, setSearchText] = useState("");

  // Whenever state variable update, react triggers a reconciliation cycle(re-renders the component )
  // console.log("Body Rendered");

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline. Please check your internet connection</h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* Search + Filter Wrapper */}
      <div className="search-filter">
        {/* Search Box */}
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Button (below search for better UX) */}
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              // Filter logic here
              const filteredList = filteredRestaurant.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            ⭐ Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
