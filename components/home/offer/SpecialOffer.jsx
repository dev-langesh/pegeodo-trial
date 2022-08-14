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
  const [state, setState] = useState([]);

  useEffect(() => {
    const updatedData = data.map((offer) => {
      const currentDate = new Date();
      const from = new Date(offer.from);
      const to = new Date(offer.to);

      console.log(from);

      if (from > currentDate) {
        return {
          ...offer,
          upcomming: true,
        };
      } else {
        return {
          ...offer,
          upcomming: false,
          timeLeft: Math.ceil(Math.ceil(to - currentDate) / 3600000),
        };
      }
    });

    setState(updatedData);
  }, [data]);

  useEffect(() => {
    console.log(state);
  }, [state]);

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
            <span className="absolute top-3 right-3 bg-orange-100 text-orange-700 z-20 text-sm px-4 py-1 rounded-full">
              {state[index]?.upcomming
                ? "Upcomming"
                : state[index]?.timeLeft + "hrs Left"}
            </span>
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
