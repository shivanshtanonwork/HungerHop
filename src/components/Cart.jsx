import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          🛒 Cart
        </h1>
        <div>
          <ItemList items={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
