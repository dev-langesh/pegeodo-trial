import React, { useEffect, useRef, useState, useEvent } from "react";
import { SpecialOfferSlider } from "./SpecialOfferSlider";
import { selectAllSpecialOffers } from "../../../src/features/plants/specialOfferSlice";
import { useSelector } from "react-redux";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button, IconButton } from "@mui/material";

export default function SpecialOffer() {
  const data = useSelector(selectAllSpecialOffers);
  const [index, setIndex] = useState(0);

  function nextImage() {
    if (index < data.length - 1) {
      setIndex(index + 1);
    }
  }

  function prevImage() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <>
      <section className="mt-4 flex flex-col justify-center items-center">
        <div className="flex lg:space-x-6 items-center justify-center p-4 w-full">
          <main className="flex flex-no-wrap w-full  md:w-3/4  h-[350px] overflow-hidden relative">
            <SpecialOfferSlider image={data[index].image} />
          </main>
        </div>
        <div className="flex">
          <Button onClick={prevImage} color="secondary">
            <ArrowBackIosIcon />
          </Button>
          <Button onClick={nextImage} color="secondary">
            <ArrowForwardIosIcon />
          </Button>
        </div>
      </section>
    </>
  );
}
