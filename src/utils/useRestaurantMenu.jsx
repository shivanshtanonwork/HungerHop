import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  //fetchData
  useEffect(() => {
    if (!resId) {
      return;
    }
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      if (typeof MENU_API !== "string" || MENU_API.trim() === "") {
        throw new Error("Invalid menu API URL.");
      }
      if (!resId) {
        throw new Error("Missing restaurant id.");
      }

      const menuUrl = `${MENU_API}${encodeURIComponent(resId)}`;
      const data = await fetch(menuUrl);
      if (!data.ok) {
        throw new Error(`Restaurant menu request failed with ${data.status}.`);
      }

      const json = await data.json();
      setResInfo(json?.data ?? null);
    } catch (error) {
      console.error("Failed to fetch restaurant menu:", error);
      setResInfo(null);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
