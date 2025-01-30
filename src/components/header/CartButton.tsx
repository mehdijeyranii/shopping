import { ShoppingCart, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image01 from "./../../assets/01.png";
import image02 from "./../../assets/02.png";
import image03 from "./../../assets/01.png";
import { CartItem } from "../../types/cartItem";

// Mock cart items for simulation
const mockCartItems = [
  { id: 1, image: image01, name: "موبایل", quantity: 1 },
  { id: 2, image: image02, name: "هدفون", quantity: 2 },
  { id: 3, image: image03, name: "لپ‌تاپ", quantity: 1 },
  { id: 3, image: image01, name: "لپ‌تاپ", quantity: 1 },
  { id: 3, image: image02, name: "لپ‌تاپ", quantity: 1 },
  { id: 3, image: image03, name: "لپ‌تاپ", quantity: 1 },
  { id: 3, image: image01, name: "لپ‌تاپ", quantity: 1 },
  { id: 3, image: image02, name: "لپ‌تاپ", quantity: 1 },
  { id: 3, image: image03, name: "لپ‌تاپ", quantity: 1 },
  { id: 3, image: image01, name: "لپ‌تاپ", quantity: 1 },
  { id: 3, image: image02, name: "لپ‌تاپ", quantity: 1 },
  { id: 3, image: image03, name: "لپ‌تاپ", quantity: 1 },
];

const CartButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [cartItems, setCartItems] = useState(mockCartItems);
  const cartItems: {
    id: number;
    image: string;
    name: string;
    quantity: number;
}[] = mockCartItems;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".cart-button-container")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <div className="relative cart-button-container">
      {/* Cart Button */}
      <button
        className="relative p-2 border rounded-lg hover:bg-gray-100 transition-colors"
        onClick={toggleDropdown}
        aria-label="سبد خرید"
      >
        <ShoppingCart className="text-gray-700" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 px-2 text-xs text-white bg-sky-700 rounded-full">
            {cartItems.length}
          </span>
        )}
      </button>

      {/* Cart Dropdown */}
      {isDropdownOpen && (
        <div className="absolute left-0 mt-1 w-96 h-auto max-h-[448px] overflow-y-scroll bg-zinc-50 border rounded-lg shadow-lg z-10">
          <div className="p-4">
            <h3 className="font-bold text-md mb-4 text-center">سبد خرید</h3>
            <hr />
            <CartItemsList items={cartItems} />
            <CartActions />
          </div>
        </div>
      )}
    </div>
  );
};

// Component for rendering cart items
const CartItemsList = ({ items }: { items: CartItem[] }) => {
  if (items.length === 0) {
    return <p className="text-gray-500">سبد خرید خالی است</p>;
  }

  return (
    <div className="">
      {items.map((item) => (
        <Link
          to="#"
          key={item.id}
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
              <span className="font-semibold text-zinc-700">
                {item.quantity}
              </span>
              <button className="bg-zinc-300 text-white w-6 h-6 flex items-center justify-center rounded-md hover:bg-green-600 transition">
                +
              </button>
            </div>
          </div>
          <span className="px-2 text-xs text-center flex-[2]">14000000000</span>
          <div className=" grid place-content-center flex-1">
            <Trash2 size={14} className="text-rose-500" />
          </div>
        </Link>
      ))}
    </div>
  );
};

// Component for cart actions (buttons)
const CartActions = () => (
  <div className="mt-4 flex justify-between">
    <button className="text-sm text-blue-600 hover:underline">
      مشاهده سبد خرید
    </button>
    <button className="text-sm text-blue-600 hover:underline">
      ادامه خرید
    </button>
  </div>
);

export default CartButton;
