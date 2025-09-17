import { useState } from "react";
import ItemList from "./ItemList";
import { ChevronDown, ChevronUp } from "lucide-react";

const ResCategory = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-lg text-gray-800">
          {data.title} ({data.itemCards.length})
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </div>

      {/* Accordion Body */}
      {open && (
        <div className="mt-4">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default ResCategory;
