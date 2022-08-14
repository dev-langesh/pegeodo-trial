import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  updateRequiredQuantity,
  updateSubTotal,
} from "../../src/features/cart/cartSlice";

export default function CartCard({
  image,
  name,
  price,
  offerPrice,
  originalPrice,
  availableQuantity,
  requiredQuantity,
  _id,
}) {
  const dispatch = useDispatch();

  async function removeItem(id, price) {
    console.log(id);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/cart/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();

    if (!data.error) {
      dispatch(removeItemFromCart({ id, price }));
    }
    console.log(data);
  }

  async function changeQuantity(e, id) {
    dispatch(updateRequiredQuantity({ id, requiredQuantity: e.target.value }));
    dispatch(updateSubTotal());
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/cart/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ requiredQuantity: e.target.value }),
      }
    );
    const data = await res.json();

    console.log(data);
  }

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
        <Image
          priority={true}
          layout="fill"
          src={image}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3 className="font-slab text-indigo-500">
              <a href="#"> {name} </a>
            </h3>
            <p className="ml-4 font-slab text-slate-400">Rs. {price}</p>
          </div>

          <p className="mt-1 text-xs text-slate-500">
            {" "}
            {availableQuantity} items available
          </p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="text-slate-500">
            <span className="px-2 ">Qty</span>
            <input
              type="text"
              value={requiredQuantity ? requiredQuantity : ""}
              onChange={(e) => changeQuantity(e, _id)}
              className="border w-8 p-1 outline-none "
            />
            <span className="text-sm px-2">
              x{" "}
              <span className="text-xs">
                {offerPrice ? offerPrice : originalPrice}
              </span>
            </span>
          </div>

          <div className="flex">
            <button
              onClick={() => removeItem(_id, price)}
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
