import { useState } from "react";

const CategoryMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="px-4 py-2 text-white bg-primary rounded-lg"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        دسته‌بندی‌ها
      </button>

      {isOpen && (
        <ul
          className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <li className="px-4 py-2 hover:bg-gray-100">موبایل</li>
          <li className="px-4 py-2 hover:bg-gray-100">لپ‌تاپ</li>
          <li className="px-4 py-2 hover:bg-gray-100">لوازم جانبی</li>
        </ul>
      )}
    </div>
  );
};

export default CategoryMenu;
