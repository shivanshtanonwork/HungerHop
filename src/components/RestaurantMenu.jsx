import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, isLoading, error } = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  const dummy = "Dummy Data";

  if (error) {
    return (
      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-red-200 bg-red-50 p-6 text-center shadow-sm">
        <h2 className="text-xl font-semibold text-red-700">
          We could not load this restaurant menu.
        </h2>
        <p className="mt-2 text-sm text-red-600">{error.message}</p>
      </div>
    );
  }

  if (isLoading || resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ?? [];

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Restaurant Info */}
      <div className="bg-gradient-to-r from-white to-gray-50 shadow-lg rounded-3xl p-6 mb-8 border border-gray-200 text-center transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl">
        <h1 className="font-extrabold text-3xl text-gray-900 tracking-wide">
          {name}
        </h1>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          {cuisines?.join(", ")} • {costForTwoMessage}
        </p>
      </div>

      {/* Categories Accordions */}
      <div className="space-y-6">
        {categories.map((category, index) => (
          // controlled component
          <ResCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex(showIndex === index ? null : index)
            }
            dummy={dummy}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
