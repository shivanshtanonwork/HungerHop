import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData.info;

  const { loggedInUser } = useContext(UserContext);

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
      <h4 className="text-sm font-medium text-gray-700">
        User : {loggedInUser}
      </h4>
    </div>
  );
};

// Higher order component

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    return (
      <div className="relative">
        <label
          className="absolute top-2 left-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white 
            px-2 py-1 text-[11px] font-semibold rounded-full shadow-md tracking-wide 
            uppercase"
        >
          <span className="font-bold">
            {resData.info?.aggregatedDiscountInfoV3?.header}
          </span>{" "}
          <span className="opacity-90">
            {resData.info?.aggregatedDiscountInfoV3?.subHeader}
          </span>
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
