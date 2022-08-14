import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BestSellingProducts from "./BestSellingProduct/BestSellingProducts";
import Slider from "./category/Slider";
import Title from "./Title";
import ExclusiveOffer from "./offer/ExclusiveOffer";

function Home() {
  return (
    <div className="space-y-8 ">
      <Slider />
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
