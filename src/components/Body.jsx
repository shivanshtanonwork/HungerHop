import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  // Normal JS Variable
  // let listOfRestaurants = [
  //   {
  //     info: {
  //       id: "118870",
  //       name: "KFC",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/1f24c270-270b-4a97-aa62-57fdec2bfc38_118870.JPG",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //       avgRating: 3.5,
  //       avgRatingString: "3.5",
  //       sla: {
  //         deliveryTime: 41,
  //         slaString: "40-45 mins",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "118871",
  //       name: "Dominos",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/1f24c270-270b-4a97-aa62-57fdec2bfc38_118870.JPG",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //       avgRating: 4.3,
  //       avgRatingString: "4.3",
  //       sla: {
  //         deliveryTime: 41,
  //         slaString: "40-45 mins",
  //       },
  //     },
  //   },
  // ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
