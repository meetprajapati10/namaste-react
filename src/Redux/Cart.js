import { useDispatch, useSelector } from "react-redux";
import ItemList from "../components/ItemList";
import { clearCart } from "./cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center p-4 m-4">
      <h1 className="text-3xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-red-500 font-semibold text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <div className="m-2">
            <h1 className="font-bold text-xl">Your cart is empty</h1>
            <h3 className="text-gray-600">
              You can go to home page to view more restaurants!!
            </h3>
          </div>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
