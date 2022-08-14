import { IconButton, Rating } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ResponseMessage from "../common/ResponseMessage";

export default function PlantCard(plant) {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function addItemToCart() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ plant: { ...plant, price: plant.originalPrice } }),
    });
    const data = await res.json();
    if (data.error) {
      setError(data.error);
    }
    if (data.message) {
      setMessage(data.message);
    }
    console.log({ plant: { ...plant, price: plant.originalPrice } });
  }

  function closeMessage() {
    setError("");
    setMessage("");
  }

  function clickHandler() {
    router.push(`/plant/${plant._id}`);
  }

  return (
    <>
      {(error || message) && (
        <ResponseMessage
          handleSnackBarOnClose={closeMessage}
          on
          error={error}
          message={message}
        />
      )}
      <section className="mt-4 w-[260px] row-span-1 col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 m-auto shadow-md hover:shadow-indigo-300/50 transform hover:-translate-y-2 transition-all duration-300 flex-shrink-0 snap-center rounded-xl !no-underline relative ">
        <Image
          onClick={clickHandler}
          width={260}
          height={150}
          className="!w-full !h-[160px] object-cover rounded-xl hover:cursor-pointer"
          src={plant.image}
          alt="Image Not Found"
        />
        <section className="py-2 px-4 flex flex-col items-start  w-full">
          <div
            onClick={clickHandler}
            className="flex w-full justify-between cursor-pointer"
          >
            <div className="space-y-2">
              <h1 className="text-purple-700 font-poppins no-underline">
                {plant.name}
              </h1>
              <p className="text-slate-400">
                <b className="font-slab font-bold text-md">
                  Rs. <span className="text-sm">{plant.offerPrice}</span>
                </b>
                <span className="line-through text-xs ml-2">
                  {" "}
                  {plant.originalPrice}
                </span>
              </p>
            </div>
            <span className="bg-yellow-200 py-1 px-3 text-yellow-600 text-sm rounded-xl flex-shrink-0 absolute right-4 ">
              {plant.offerPercentage}% off
            </span>
          </div>
          <div className="flex w-full items-center justify-between">
            <Rating readOnly className="self-center" value={plant.rating} />
            <IconButton onClick={addItemToCart} sx={{ color: "violet" }}>
              <ShoppingCartIcon className="text-purple-500" />
            </IconButton>
          </div>
        </section>
      </section>
    </>
  );
}
