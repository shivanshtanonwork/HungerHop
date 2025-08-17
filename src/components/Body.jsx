import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  const [searchText, setSearchText] = useState("")

  
  // Whenever state variable update, react triggers a reconciliation cycle(re-renders the component )
  // console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9395989&lng=77.728955&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
        onChange={(e)=>{setSearchText(e.target.value)}}
      />
      <button onClick={()=>{
        console.log(searchText);
        const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredRestaurant(filteredRestaurant)
      }}>Search</button>
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
      <RestaurantCard key={restaurant.info.id} resData={restaurant} />
    ))}
  </div>
</div>

  );
};

export default Body;
