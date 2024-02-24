import { addItem } from "../Redux/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({ items, dummyData }) => {
  //   console.log(items);

  // console.log(dummyData);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        const { id, name, defaultPrice, price, description, imageId } =
          item?.card?.info;
        return (
          <div
            data-testid="itemsList"
            key={id}
            className="p-2 m-2 flex justify-between border-b-2"
          >
            <div className="w-9/12 text-left">
              <div>
                <div className="font-medium">{name}</div>
                <div>₹{defaultPrice / 100 || price / 100}</div>
              </div>
              <p className="text-xs mt-2">{description}</p>
            </div>

            <div className="w-3/12 p-4">
              <div className="relative">
                <button
                  className="p-2 rounded-md absolute -bottom-1 left-[43px]  bg-white font-bold text-sm text-green-500 shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  ADD +
                </button>
                <img src={CDN_URL + imageId} className="rounded-lg" />
              </div>
              <p className="text-xs pt-[3px]">Customisable</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
