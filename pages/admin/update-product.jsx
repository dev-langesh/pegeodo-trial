import React from "react";
import UpdateContainer from "../../components/admin/updateProduct/UpdateContainer";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPlants } from "../../src/features/plants/plantsSlice";
import Title from "../../components/home/Title";

export default function UpdateProduct({ sectionCount, products }) {
  return (
    <>
      <Title text="Update" />
      <UpdateContainer sectionCount={sectionCount} products={products} />
    </>
  );
}

export const getServerSideProps = async () => {
  const productRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/products/1`
  );

  const products = await productRes.json();
  return { props: { ...products } };
};
