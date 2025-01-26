import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { CartItem } from "../../types/cartItem";

type CartItemProps = {
  item: CartItem;
};

const CartItem = ({ item }: CartItemProps) => {
  return (
    <Link
      to="#"
      className="flex justify-between items-center p-2 bg-zinc-50 hover:bg-zinc-100 gap-1"
    >
      <div className="grid place-content-center bg-zinc-200 rounded-md ml-2 flex-[2] w-full aspect-square">
        <img
          src={item.image}
          alt={item.name}
          className="bg-gray-800 rounded w-7 h-7 object-cover aspect-square"
        />
      </div>
      <div className="flex flex-col flex-[4]">
        <h4 className="text-sm">{item.name}</h4>
      </div>
      <div className="grid place-content-center">
        <div className="border border-zinc-300 p-1 flex justify-center items-center gap-2 text-xs rounded-lg flex-[3] bg-zinc-100">
          <button className="bg-zinc-300 text-white w-6 h-6 flex items-center justify-center rounded-md hover:bg-rose-600 transition">
            −
          </button>
          <span className="font-semibold text-zinc-700">{item.quantity}</span>
          <button className="bg-zinc-300 text-white w-6 h-6 flex items-center justify-center rounded-md hover:bg-green-600 transition">
            +
          </button>
        </div>
      </div>
      <span className="px-2 text-xs text-center flex-[2]">14000000000</span>
      <div className="grid place-content-center flex-1">
        <Trash2 size={14} className="text-rose-500" />
      </div>
    </Link>
  );
};

export default CartItem;
