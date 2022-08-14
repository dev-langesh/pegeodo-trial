import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllPlantOffers } from "../../../src/features/plants/offerPlantsSlice";
import PlantCard from "../../plant/PlantCard";

export default function ExclusiveOffer() {
  const offers = useSelector(selectAllPlantOffers);

  return (
    <section className="flex w-full overflow-x-auto items-center space-x-6 hide-scrollbar p-2 snap-x md:snap-none snap-mandatory scroll-smooth scroll-m-2">
      {offers?.map((plant) => {
        return <PlantCard key={plant._id} {...plant} />;
      })}
    </section>
  );
}
