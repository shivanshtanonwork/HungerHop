import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      ?.itemCards || [];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8">
        {/* Restaurant Info */}
        <h1 className="text-3xl font-bold text-purple-700 mb-2">{name}</h1>
        <p className="text-gray-600 text-lg mb-6">
          {cuisines?.join(", ")} • {costForTwoMessage}
        </p>

        {/* Menu Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Menu</h2>
        <ul className="space-y-4">
          {itemCards.length > 0 ? (
            itemCards.map((item) => (
              <li
                key={item.card.info.id}
                className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:shadow-md transition"
              >
                <span className="text-gray-800 font-medium">
                  {item.card.info.name}
                </span>
                <span className="text-purple-700 font-semibold">
                  ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
                </span>
              </li>
            ))
          ) : (
            <li className="text-gray-500 italic">No items available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
