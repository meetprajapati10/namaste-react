import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { RESDATA_API } from "../utils/constants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
  // Local State Variable - Super Powerful Variable
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  const [searchText, setSearchText] = useState("");

  // console.log("Body Render");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESDATA_API);

    const json = await data.json();

    // console.log(
    //   json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants,
    // );
    setListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

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
      <div className="res-container">
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
