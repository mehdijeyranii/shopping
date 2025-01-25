import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import { Loader2, Search } from "lucide-react";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".search-container")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      setIsLoading(true);
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearInterval(timeout);
    }
  }, [query]);

  return (
    <div className="relative search-container w-full max-w-xl">
      <input
        type="text"
        placeholder="جستجو کنید..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsOpen(true)}
        className="text-sm text-zinc-500 bg-zinc-100 w-full py-3 px-8 pr-12 rounded-lg border border-zinc-300 focus:outline-none focus-visible:outline-none focus-visible:ring-0 placeholder:text-zinc-400"
      />

      <Search className="absolute top-1/2 -translate-y-1/2 right-3 text-zinc-400" />

      {isOpen && query.length > 0 && (
        <div className="absolute w-full mt-2 bg-white border border-zinc-300 rounded-lg shadow-md">
          {isLoading ? (
            <div className="p-4 flex justify-center items-center">
              <Loader2 className="text-zinc-500 animate-spin" size={24} />
            </div>
          ) : (
            <SearchResults query={query} />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
