import React from "react";

export default function OfferText({ offer }) {
  return (
    <div className="text-slate-400 ">
      <div className="flex items-center flex-col justify-center space-y-4">
        <span className="bg-yellow-200 py-1 px-3 text-yellow-600 text-sm rounded-xl flex-shrink-0">
          {offer}% off
        </span>
      </div>
    </div>
  );
}
