import { Heart } from "lucide-react";

const WishlistButton = () => {
  return (
    <button className="relative p-2 border rounded-lg hover:bg-gray-100">
      <Heart />
      <span className="absolute -top-2 -right-2 px-2 text-xs text-white bg-sky-700 rounded-full">
        9
      </span>
    </button>
  );
};

export default WishlistButton;
