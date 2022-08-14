import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllPlants } from "../../../src/features/plants/plantsSlice";
import PlantCard from "../../plant/PlantCard";
import Products from "../../products/Products";

export default function UpdateContainer({ sectionCount, products }) {
  return <Products sectionCount={sectionCount} products={products} />;
}
