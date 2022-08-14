import React from "react";
import { useSelector } from "react-redux";
import { selectBestSellingPlants } from "../../../src/features/plants/bestSellingPlants";
import PlantCard from "../../plant/PlantCard";

export default function BestSellingProducts() {
  const bestSellingPlants = useSelector(selectBestSellingPlants);
  return (
    <section className="flex w-full overflow-x-auto items-center space-x-6 hide-scrollbar px-3 pb-4 snap-x md:snap-none snap-mandatory scroll-smooth scroll-m-2">
      {bestSellingPlants?.map((plant) => {
        return <PlantCard key={plant._id} {...plant} />;
      })}
    </section>
  );
}
