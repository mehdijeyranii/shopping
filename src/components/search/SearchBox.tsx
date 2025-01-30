import { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { Search } from "lucide-react";
import SearchResults from "./SearchResults";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsDropdownOpen(false));

  return (
    <div ref={dropdownRef} className="relative w-full max-w-xl">
      <input
        type="text"
        placeholder="جستجو کن..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsDropdownOpen(true)}
        aria-label="Search for products"
        aria-expanded={isDropdownOpen}
        className="bg-zinc-100 w-full h-12 pl-4 pr-14 rounded-md text-sm border border-zinc-300 focus:outline-none focus-visible:outline-none focus-visible:ring-0 placeholder:text-zinc-400"
      />

      <Search
        className="text-zinc-400 absolute top-1/2 -translate-y-1/2 right-5"
        strokeWidth={1.5} size={18}
      />

      {isDropdownOpen && searchQuery.length > 0 && (
        <div className="absolute w-full top-14 rounded-lg shadow-lg z-50 bg-zinc-50">
          <SearchResults searchQuery={searchQuery} />
        </div>
      )}
    </div>
  );
};

export default SearchBox;
