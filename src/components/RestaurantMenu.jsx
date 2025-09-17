import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { ChevronDown } from "lucide-react"; // install lucide-react

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Restaurant Info (Hero Style) */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl shadow-md p-8 text-center">
        <h1 className="font-bold text-3xl text-gray-900">{name}</h1>
        <p className="text-base text-gray-600 mt-2">
          {cuisines?.join(", ")} • {costForTwoMessage}
        </p>
      </div>

      {/* Categories Accordions */}
      <div className="mt-8 space-y-4">
        {categories.map((category) => (
          <ResCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
