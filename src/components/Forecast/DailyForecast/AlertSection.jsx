import { TriangleAlert } from "lucide-react";
import React from "react";

const AlertSection = ( {alerts} ) => {
  if (!alerts?.length) return null;
  return (
    <div className="flex flex-col bg-gray-700/20 rounded-md py-2 px-3 gap-2 font-chakra text-stone-200">
      <div className="flex items-center gap-2 border-b border-stone-400 py-2">
        <TriangleAlert color="#e71313" />
        <h1>ALERTS</h1>
      </div>
      {alerts.map(({ index, category, description, timing }) => (
        <div
          key={index}
          className="text-red-400 text-sm flex flex-col gap-2 py-2"
        >
          <div>
            {category} <span className="text-stone-200"> - {description}</span>
          </div>
          <div className="text-xs text-stone-300">
            {timing.from.time} {timing.from.day} - {timing.to.time}{" "}
            {timing.to.day}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlertSection;
