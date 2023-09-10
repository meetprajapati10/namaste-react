import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
  // Local State Variable - Super Powerful Variable
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("Body Render");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.9787903&lng=72.59566219999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    // console.log(
    //   json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants,
    // );
    setListOfRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  // if (listOfRes.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {/* Logic for Filtered Search-box */}
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              // Filter the restaurent cards and Update the UI
              // searchText
              console.log(searchText);

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
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRes(
              listOfRes.filter((filterdList) => filterdList.info.avgRating > 4),
            );
            // console.log(listOfRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((list) => (
          <RestaurantCard key={list.info.id} resData={list} />
        ))}
      </div>
    </div>
  );
};

export default Body;
