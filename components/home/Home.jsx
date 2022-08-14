import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllSpecialOffers } from "../../src/features/plants/specialOfferSlice";
import BestSellingProducts from "./BestSellingProduct/BestSellingProducts";
import SpecialOffer from "./offer/SpecialOffer";
import Slider from "./category/Slider";
import Title from "./Title";
import ExclusiveOffer from "./offer/ExclusiveOffer";

function Home() {
  const data = useSelector(selectAllSpecialOffers);

  return (
    <div className="space-y-8 ">
      <Slider />
      <Title text="Special Offers" />
      {data?.length !== 0 && <SpecialOffer />}
      <Title text="Exclusive Offers" />
      <ExclusiveOffer />
      <Title text="Best Selling Products" />
      <BestSellingProducts />
      <Title text="New Arrival" />
      <BestSellingProducts />
    </div>
  );
}

export default Home;
