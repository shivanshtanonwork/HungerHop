import { useState, useEffect } from "react";
import { RESTAURANT_LIST_API } from "./constants";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);

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

      const contentType = data.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        const text = await data.text();
        throw new Error(
          `Restaurant list response is not JSON from ${RESTAURANT_LIST_API}. Received content-type "${contentType}". Body starts with: ${text
            .slice(0, 120)
            .replace(/\s+/g, " ")}`
        );
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
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    listOfRestaurants,
    filteredRestaurant,
    setFilteredRestaurant,
    isLoading,
    error,
  };
};

export default useRestaurantList;
