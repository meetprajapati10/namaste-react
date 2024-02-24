import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const dummyData = "Dummy Data";

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, areaName } =
    resInfo?.cards[2]?.card?.card?.info;

  // const itemCards =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ?.itemCards ||
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ?.itemCards;

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  // console.log(categories);

  return (
    <div className="text-center">
      <div className="border-b-2 border-slate-200 border-dashed">
        <h1 className="font-bold text-3xl my-6">{name}</h1>
        <h2 className="font-bold text-2xl">{avgRating + "⭐"}</h2>
        <p className="font-medium mt-2">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <p className="font-medium mb-3">Area: {areaName}</p>
      </div>

      {/* categories accordions */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() =>
            setShowIndex(
              index === showIndex ? null : index,
              // console.log(index, showIndex),
            )
          }
          dummyData={dummyData}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
