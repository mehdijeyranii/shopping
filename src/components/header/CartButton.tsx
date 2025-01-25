import { ShoppingCart } from "lucide-react";

const CartButton = () => {
  return (
    <button className="relative p-2 border rounded-lg hover:bg-gray-100">
      <ShoppingCart />
      <span className="absolute -top-1 -right-1 px-2 text-xs text-white bg-red-500 rounded-full">
        2
      </span>
    </button>
  );
};

export default CartButton;
