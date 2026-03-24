import { useState, useEffect } from "react";
import { RESTAURANT_LIST_API } from "./constants";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_API);
    const json = await data.json();
    console.log(json);

    const restaurants =
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  return { listOfRestaurants, filteredRestaurant, setFilteredRestaurant };
};

export default useRestaurantList;
