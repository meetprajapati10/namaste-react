import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";

const RestaurantCard = (props) => {
  const { loggedInUser } = useContext(userContext);

  const { resData } = props;

  // console.log(resData);

  const { name, cuisines, avgRating, costForTwo } = resData;

  const { deliveryTime } = resData?.sla;

  return (
    <div
      data-testid="resCard"
      className="res-card p-4 m-4 w-[221px] rounded-md bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        src={CDN_URL + resData.cloudinaryImageId}
        alt="food-img"
      />
      <h2 className="font-bold py-3 text-lg">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

export const withOpenResLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-300 m-2 p-1 rounded-lg">Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
