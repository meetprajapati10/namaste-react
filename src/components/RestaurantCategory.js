import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummyData }) => {
  // console.log(data);

  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-2 p-2 bg-gray-50 shadow-lg">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>

      {showItems && <ItemList items={data?.itemCards} dummyData={dummyData} />}
    </div>
  );
};

export default RestaurantCategory;
