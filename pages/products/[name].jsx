import React from "react";
import Products from "../../components/products/Products";
import { useRouter } from "next/router";
import Title from "../../components/home/Title";

export default function SearchByName({ sectionCount, products }) {
  const router = useRouter();
  const { name } = router.query;

  if (products?.length === 0) {
    return (
      <h1 className="text-center text-xl p-10 text-gray-700">
        {name} is not present
      </h1>
    );
  }
  return (
    <>
      <Title text={name} />
      <Products sectionCount={sectionCount} products={products} />{" "}
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/plants/get-all-names`
  );
  const data = await res.json();
  console.log(data);
  const paths = data?.map((plant) => ({
    params: { name: plant.name },
  }));
  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async (context) => {
  const { name } = context.params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/products?name=${name}&section=1`
  );
  const data = await res.json();

  return {
    props: { ...data },
  };
};
