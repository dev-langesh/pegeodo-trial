import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import PlantCard from "../plant/PlantCard";
import { CircularProgress, LinearProgress } from "@mui/material";

export default function Products({ sectionCount, products }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (products) {
      setLoading(false);
    }
  }, [products]);

  const changePage = async (event, value) => {
    setPage(value);
    if (value !== 1) {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/products/${value}`
      );
      const data = await res.json();
      setLoading(false);
      setData(data.products);
    }
  };

  if (loading) {
    return (
      <section className="w-full p-10 text-center">
        <CircularProgress />;
      </section>
    );
  }

  return (
    <section className="space-y-10 flex flex-col items-center justify-center">
      {/* <Filter /> */}
      <section className="grid grid-cols-12 justify-items-center gap-10 p-4">
        {page === 1
          ? products?.map((plant) => {
              return <PlantCard key={plant._id} {...plant} />;
            })
          : data?.map((plant) => {
              return <PlantCard key={plant._id} {...plant} />;
            })}
      </section>
      {sectionCount !== 1 && (
        <div className="pb-6">
          <Pagination
            count={sectionCount}
            page={page}
            onChange={changePage}
            shape="rounded"
          />
        </div>
      )}
    </section>
  );
}
