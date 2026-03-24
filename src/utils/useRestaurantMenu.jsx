import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MENU_API + resId);
        if (!response.ok) {
          throw new Error(`Restaurant menu request failed: ${response.status}`);
        }

        const json = await response.json();
        setResInfo(json?.data ?? null);
      } catch (error) {
        console.error("Failed to fetch restaurant menu", error);
        setResInfo(null);
      }
    };

    fetchData();
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
