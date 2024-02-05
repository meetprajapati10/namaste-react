import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo } = resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card p-4 m-4 w-[221px] rounded-md bg-gray-100 hover:bg-gray-200">
      <div>
        <img
          className="rounded-lg"
          src={CDN_URL + resData.info.cloudinaryImageId}
          alt="food-img"
        />
      </div>
      <h2 className="font-bold py-3 text-lg">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
