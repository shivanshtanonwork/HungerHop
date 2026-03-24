import { useState, useEffect } from "react";
import { RESTAURANT_LIST_API } from "./constants";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      if (
        typeof RESTAURANT_LIST_API !== "string" ||
        RESTAURANT_LIST_API.trim() === ""
      ) {
        throw new Error("Invalid restaurant list API URL.");
      }

      const data = await fetch(RESTAURANT_LIST_API);
      if (!data.ok) {
        throw new Error(`Restaurant list request failed with ${data.status}.`);
      }

      const json = await data.json();
      const restaurants =
        json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ?? [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Failed to fetch restaurant list:", error);
      setListOfRestaurants([]);
      setFilteredRestaurant([]);
    }
  };

  return { listOfRestaurants, filteredRestaurant, setFilteredRestaurant };
};

export default useRestaurantList;
