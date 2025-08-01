import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  // if (!resData || !resData.info) {
  //   return null; // or a loading component
  // }
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h5>{sla.slaString}</h5>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
