import { Heart } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { products } from "../../data/product";
import useClickOutside from "../../hooks/useClickOutside";
import WishlistDropdown from "./WishlistDropdown";

const WishlistButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const wishlistButtonRef = useRef<HTMLDivElement>(null);

  useClickOutside(wishlistButtonRef, () => setIsDropdownOpen(false));

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const dropdownContent = useMemo(() => {
    return isDropdownOpen && <WishlistDropdown items={products} />;
  }, [isDropdownOpen]);

  return (
    <div
      ref={wishlistButtonRef}
      className="relative size-8 grid place-content-center rounded-md bg-zinc-100 border-[1px] border-zinc-300"
    >
      <button
        aria-label="wishlist"
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
        className="text-zinc-400"
      >
        <Heart size={20} />
        {products.length > 0 && (
          <span className="bg-sky-500 size-5 grid place-content-center rounded-full absolute -bottom-1 -right-2 text-[10px] font-bold text-white">
            99
          </span>
        )}
      </button>

      {isDropdownOpen && dropdownContent}
    </div>
  );
};

export default WishlistButton;
