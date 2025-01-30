import { useEffect } from "react";
import useProductSearch from "../../hooks/useProductSearch";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const SearchResults = ({ searchQuery }: { searchQuery: string }) => {
  const { filteredProducts, isSearchLoading } = useProductSearch(searchQuery);

  useEffect(() => {
    document.body.style.overflow =
      filteredProducts.length > 0 ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [filteredProducts]);

  return (
    <div className="w-full h-auto max-h-80 overflow-y-auto flex flex-col justify-start items-start bg-zinc-50 border border-zinc-300 rounded-lg shadow-lg">
      {isSearchLoading ? (
        <div className="w-full h-12 grid place-content-center">
          <Loader2 className="animate-spin text-zinc-500" />
        </div>
      ) : filteredProducts.length > 0 ? (
        filteredProducts.map((product, productIndex) => (
          <Link
            to="#"
            key={productIndex}
            className="px-4 py-2 hover:bg-zinc-100 cursor-pointer w-full"
          >
            {product.name}
          </Link>
        ))
      ) : (
        <p className="w-full h-12 text-zinc-500 grid place-content-center">
          نتیجه ای یافت نشد
        </p>
      )}
    </div>
  );
};

export default SearchResults;
