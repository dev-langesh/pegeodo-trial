import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default function UpdateCard({
  _id,
  name,
  category,
  image,
  originalPrice,
  offerPrice,
  quantity,
  offerPercentage,
  sold,
}) {
  return (
    <section className="mt-4 w-[260px] m-auto shadow-md hover:shadow-indigo-300/50 hover:cursor-pointer flex-shrink-0 snap-center rounded-xl ">
      <section className="relative">
        <img
          className="w-full h-[160px] object-cover rounded-xl"
          src={image}
          alt="Image Not Found"
        />
      </section>
      <section className="py-2 px-4 flex items-start justify-between">
        <div className="space-y-2">
          <h1 className="text-purple-700 font-poppins">{name}</h1>
          <span className="text-slate-400 ">
            <b className="font-slab font-bold text-md">Rs. </b>
            <span className="text-sm">{offerPrice}</span>
            <span className="line-through text-xs ml-2"> {originalPrice}</span>
          </span>
          <p className="text-slate-400 text-sm">Category : {category}</p>
          <p className="text-slate-400 text-sm">Sold : {sold}</p>
        </div>
        <span className="bg-yellow-200 py-1 px-3 text-yellow-600 text-sm rounded-xl ">
          {offerPercentage}% off
        </span>
      </section>
    </section>
  );
}
