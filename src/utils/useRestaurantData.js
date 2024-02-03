import { useEffect, useState } from "react";
import { RESDATA_API } from "./constants";

const useRestaurantData = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESDATA_API);

    const json = await data.json();

    setListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  return [listOfRes, filteredRes, setFilteredRes];
};

export default useRestaurantData;
