import { LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartItems,
  cartLoading,
  setCartLoading,
} from "../../src/features/cart/cartSlice";
import CartCard from "./CartCard";
import CartHeader from "./CartHeader";

export default function CartCardContainer() {
  const data = useSelector(cartItems);
  const loading = useSelector(cartLoading);
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        dispatch(setCartLoading(false));

        setMessage("No items in Cart");
      }, 4000);
    }
  }, [loading]);

  useEffect(() => {
    if (data.length !== 0) {
      dispatch(setCartLoading(false));
    }
  }, [data]);

  return (
    <main className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
      {loading && (
        <>
          <LinearProgress />
          <br />
        </>
      )}
      <CartHeader />

      <section className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {data.length === 0 && message && (
              <h1 className="text-center text-slate-400 font-slab font-medium pt-10">
                {message}
              </h1>
            )}
            {data?.map((item) => {
              return <CartCard key={item._id} {...item} />;
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
