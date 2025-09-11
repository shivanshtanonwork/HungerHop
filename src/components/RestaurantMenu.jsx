import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import js from "@eslint/js";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9395989&lng=77.728955&restaurantId=385794&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        <li>Biryani</li>
        <li>Diet Coke</li>
        <li>Burgers</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
