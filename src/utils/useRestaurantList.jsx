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
      const response = await fetch(RESTAURANT_LIST_API);
      if (!response.ok) {
        throw new Error(`Restaurant list request failed: ${response.status}`);
      }

      const json = await response.json();
      const restaurants =
        json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ?? [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Failed to fetch restaurant list", error);
      setListOfRestaurants([]);
      setFilteredRestaurant([]);
    }
  };

  return { listOfRestaurants, filteredRestaurant, setFilteredRestaurant };
};

export default useRestaurantList;
