import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="divide-y divide-gray-100">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-5 flex items-start justify-between hover:shadow-md hover:bg-white transition rounded-xl bg-gray-50/50"
        >
          {/* Left Section */}
          <div className="w-8/12 pr-6">
            <h3 className="font-semibold text-gray-900 text-lg">
              {item.card.info.name}
            </h3>
            <p className="text-purple-700 font-medium mt-1">
              ₹{(item.card.info.price ?? item.card.info.defaultPrice) / 100}
            </p>
            {item.card.info.description && (
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                {item.card.info.description}
              </p>
            )}
          </div>

          {/* Right Section */}
          <div className="w-4/12 relative flex flex-col items-center">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="Food"
              className="w-28 h-28 object-cover rounded-xl shadow-sm border border-gray-200"
            />
            <button className="absolute bottom-0 translate-y-1/2 px-5 py-1.5 rounded-full bg-purple-600 text-white text-sm font-medium shadow-md hover:bg-purple-700 active:scale-95 transition">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
