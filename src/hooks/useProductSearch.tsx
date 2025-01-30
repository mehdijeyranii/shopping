import { useEffect, useState } from "react";
import { ProductType } from "../types/product";
import { products } from "../data/product";

const useProductSearch = (searchQuery: string) => {
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setIsSearchLoading(true);
      const debounceTimeout = setTimeout(() => {
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
        setIsSearchLoading(false);
      }, 300);

      return () => clearTimeout(debounceTimeout);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery]);

  return { filteredProducts, isSearchLoading };
};

export default useProductSearch;
