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

      const contentType = data.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        const text = await data.text();
        throw new Error(
          `Restaurant menu response is not JSON from ${menuUrl}. Received content-type "${contentType}". Body starts with: ${text
            .slice(0, 120)
            .replace(/\s+/g, " ")}`
        );
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
