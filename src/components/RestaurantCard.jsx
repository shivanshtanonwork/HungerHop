import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData.info;

  return (
    <div className="w-56 p-3 rounded-xl bg-white shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer">
      <img
        className="w-full h-36 object-cover rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="mt-3 text-lg font-semibold text-gray-800 truncate">
        {name}
      </h3>
      <h4 className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</h4>
      <h4 className="text-sm text-gray-700">{avgRating} ⭐</h4>
      <h5 className="text-sm text-gray-500">{sla.slaString}</h5>
      <h4 className="text-sm font-medium text-gray-700">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
