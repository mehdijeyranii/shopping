import { ShoppingCart } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import CartDropdown from "./CartDropdown";
import useClickOutside from "../../hooks/useClickOutside";
import { products } from "../../data/product";

const CartButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartButtonRef = useRef<HTMLDivElement>(null);

  useClickOutside(cartButtonRef, () => setIsDropdownOpen(false));

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const dropdownContent = useMemo(() => {
    return isDropdownOpen && <CartDropdown items={products} />;
  }, [isDropdownOpen]);

  return (
    <div
      ref={cartButtonRef}
      className="relative size-8 grid place-content-center rounded-md bg-zinc-100 border-[1px] border-zinc-300"
    >
      <button
        aria-label="cart"
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
        className="text-zinc-400"
      >
        <ShoppingCart size={20} />
        {products.length > 0 && (
          <span className="bg-sky-500 size-5 grid place-content-center rounded-full absolute -bottom-1 -right-2 text-[10px] font-bold text-white">
            3
          </span>
        )}
      </button>

      {isDropdownOpen && dropdownContent}
    </div>
  );
};

export default CartButton;
