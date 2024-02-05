import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnineStatus";
import useRestaurantData from "../utils/useRestaurantData";

const Body = () => {
  const [listOfRes, filteredRes, setFilteredRes] = useRestaurantData();

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div>
        <h1>Looks like you're offline!!</h1>
        <h2>Please check your internet connection!</h2>
      </div>
    );
  }

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter p-4 m-4 flex">
        {/* Logic for Filtered Search-box */}
        <div className="search">
          <input
            type="text"
            className="border border-solid border-black rounded"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100"
            onClick={() => {
              // Filter the restaurent cards and Update the UI
              // searchText

              setFilteredRes(
                listOfRes.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()),
                ),
              );
            }}
          >
            Search
          </button>
        </div>

        {/* Logic for Filtered Top Rated Restaurants */}
        <div className="flex items-center">
          <button
            className="bg-gray-100 px-4 py-2"
            onClick={() => {
              setFilteredRes(
                listOfRes.filter(
                  (filterdList) => filterdList.info.avgRating > 4.4,
                ),
              );
              // console.log(listOfRes);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRes.map((list) => (
          <Link key={list.info.id} to={"/restaurants/" + list.info.id}>
            <RestaurantCard resData={list} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
