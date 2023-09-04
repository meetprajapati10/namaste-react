import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
  // Local State Variable - Super Powerful Variable
  const [listOfRes, setListOfRes] = useState(resList);

  // Normal JS Variable
  // let listOfResJS = [
  //   {
  //     info: {
  //       id: "47197",
  //       name: "Domino's Pizza",
  //       cloudinaryImageId: "dy5qdagq83djbpxsqa4w",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  //       avgRating: 4.1,
  //       sla: {
  //         deliveryTime: 25,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "47198",
  //       name: "KFC",
  //       cloudinaryImageId: "dy5qdagq83djbpxsqa4w",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  //       avgRating: 3.9,
  //       sla: {
  //         deliveryTime: 25,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "47199",
  //       name: "McDonald's",
  //       cloudinaryImageId: "dy5qdagq83djbpxsqa4w",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  //       avgRating: 4.2,
  //       sla: {
  //         deliveryTime: 25,
  //       },
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
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
        {listOfRes.map((list) => (
          <RestaurantCard key={list.info.id} resData={list} />
        ))}
      </div>
    </div>
  );
};

export default Body;
