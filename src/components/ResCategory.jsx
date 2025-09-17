import React, { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-full px-4 py-2">
      {/* Category Card */}
      <div className="w-full bg-gradient-to-r from-white to-gray-50 shadow-md rounded-3xl border border-gray-200 overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl mb-6">
        {/* Header */}
        <div
          className="flex justify-between items-center px-6 py-5 cursor-pointer bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-colors duration-300"
          onClick={handleClick}
        >
          <span className="font-semibold text-gray-900 text-lg md:text-xl tracking-wide">
            {data.title}{" "}
            <span className="text-gray-500 font-medium text-sm md:text-base">
              ({data.itemCards.length})
            </span>
          </span>
          <span
            className={`text-gray-600 text-lg md:text-xl transform transition-transform duration-300 ${
              showItems ? "rotate-180" : ""
            }`}
          >
            ⬇️
          </span>
        </div>

        {/* Items */}
        {showItems && (
          <div className="px-6 py-4 bg-white border-t border-gray-100 space-y-3">
            <ItemList items={data.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResCategory;
