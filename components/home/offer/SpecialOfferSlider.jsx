import React from "react";
import Image from "next/image";

export const SpecialOfferSlider = ({ id, image }) => (
  <Image
    priority={true}
    layout="fill"
    className=" !w-full flex-shrink-0 !h-full rounded object-cover m-auto transition-all duration-200"
    src={image}
    alt="Not found"
    id={id}
  />
);
