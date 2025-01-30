import { useRef, useState } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import ContentMegaMenu from "./ContentMegaMenu";

const CategoriesMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useClickOutside(megaMenuRef, () => setIsDropdownOpen(false));

  const toggleDropdownMegaMenu = () => setIsDropdownOpen((prev) => !prev);

  return (
    <div ref={megaMenuRef}>
      <button
        className={`px-4 py-2 rounded-md text-sm hover:bg-zinc-200 hover:text-zinc-800 transition-all duration-300 ${
          isDropdownOpen ? "bg-sky-500 text-zinc-50" : "bg-transparent"
        }`}
        onClick={toggleDropdownMegaMenu}
        aria-label="mega menu"
        aria-expanded={isDropdownOpen}
      >
        دسته‌بندی‌ها
      </button>
      {isDropdownOpen && <ContentMegaMenu />}
    </div>
  );
};

export default CategoriesMenu;
