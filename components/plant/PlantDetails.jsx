import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Rating } from "@mui/material";
import Button from "../common/button/Button";
import Image from "next/image";
import OfferText from "../common/OfferText";
import NavigateButton from "../common/button/NavigateButton";
import ResponseMessage from "../common/ResponseMessage";

export default function PlantDetails({ plant }) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function addItemToCart(plant) {
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
  }

  function closeMessage() {
    setError("");
    setMessage("");
  }

  return (
    <article className="flex w-full h-[90vh] flex-col md:flex-row p-4 md:m-auto lg:w-[900px] items-center justify-center lg:space-x-8 ">
      {error && (
        <ResponseMessage
          handleSnackBarOnClose={closeMessage}
          on
          error={error}
          message={message}
        />
      )}
      <a
        href={plant.image}
        target="_blank"
        rel="noreferrer"
        className="relative aspect-square w-60 h-60 md:w-72 mx-auto block "
      >
        <Image
          layout="fill"
          src={`${plant.image}`}
          className=" flex items-center justify-center rounded"
          alt="Not found"
        />
      </a>

      <main className="flex flex-col flex-1 px-3">
        <section className="flex flex-col  w-full flex-1 pt-3 space-y-3">
          <div className=" text-xl font-slab font-medium  text-purple-600 flex space-x-6">
            <h1>{plant.name}</h1>
            <OfferText offer={plant.offerPercentage} />
          </div>
          <span className="font-slab font-bold text-md text-slate-700">
            Rs. <span className="text-sm">{plant.offerPrice}</span>
            <span className="line-through text-xs ml-2 font-normal">
              {" "}
              {plant.originalPrice}
            </span>
          </span>
          <p className="text-slate-500">
            {plant.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestiae hic, debitis voluptates atque
          </p>
          <p className="text-slate-600">{plant.sold} items sold</p>
          <p className="text-slate-600">
            {plant.availableQuantity} items availale
          </p>
          <Rating readOnly value={plant.rating} />
          <p className="text-center"></p>
        </section>
        <section>
          <footer className="space-x-4 py-4 flex items-center justify-center">
            <Button
              clickHandler={() => addItemToCart(plant)}
              text="Add to Cart"
              varient="contained"
            />
            <NavigateButton href="/order" text="Order" varient="outlined" />
          </footer>
        </section>
      </main>
    </article>
  );
}
