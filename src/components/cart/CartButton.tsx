import { ShoppingCart } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { mockCartItems } from "../../data/cartData";
import CartDropdown from "./CartDropdown";
import useClickOutside from "../../hooks/useClickOutside";

const CartButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartButtonRef = useRef<HTMLDivElement>(null);

  useClickOutside(cartButtonRef, () => setIsDropdownOpen(false));

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const dropdownContent = useMemo(() => {
    return isDropdownOpen && <CartDropdown items={mockCartItems} />;
  }, [isDropdownOpen]);

  return (
    <div
      ref={cartButtonRef}
      className="relative size-10 grid place-content-center rounded-full  "
    >
      <button
        aria-label="cart"
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
        className="text-zinc-500"
      >
        <ShoppingCart />
        {mockCartItems.length > 0 && (
          <span className="bg-sky-500 size-3 rounded-full absolute top-1 right-1"></span>
        )}
      </button>

      {isDropdownOpen && dropdownContent}
    </div>
  );
};

export default CartButton;
