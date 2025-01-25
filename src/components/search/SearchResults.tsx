import { useEffect, useState } from "react";

interface SearchResultsProps {
  query: string;
}

const SearchResults = ({ query }: SearchResultsProps) => {
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    if (query.length > 0) {
      const fetchResults = async () => {
        const allItems = [
          "موبایل",
          "لپ‌تاپ",
          "هدفون",
          "تلویزیون",
          "ساعت هوشمند",
        ];
        const filtered = allItems.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      };
      fetchResults();
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="absolute w-full mt-2 bg-white border rounded-lg shadow-lg">
      {results.length > 0 ? (
        results.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            {item}
          </div>
        ))
      ) : (
        <div className="px-4 py-2 text-gray-500">نتیجه‌ای یافت نشد</div>
      )}
    </div>
  );
};

export default SearchResults;
