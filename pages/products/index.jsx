import React from "react";
import Products from "../../components/products/Products";
import Title from "../../components/home/Title";

export default function Shop({ sectionCount, products }) {
  return (
    <section>
      <Title text="All Products" />
      <Products sectionCount={sectionCount} products={products} />
    </section>
  );
}

export const getServerSideProps = async () => {
  const productRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/products/1`
  );

  const products = await productRes.json();
  return { props: { ...products } };
};
