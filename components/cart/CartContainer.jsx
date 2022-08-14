import React, { useEffect } from "react";
import CartFooter from "./CartFooter";
import CartCardContainer from "./CartCardContainer";
import { useDispatch, useSelector } from "react-redux";
import { cartSideBarState } from "../../src/features/cart/cartSideBarSlice";
import { addToCart, cartItems } from "../../src/features/cart/cartSlice";

export default function CartContainer() {
  const cartSideBar = useSelector(cartSideBarState);
  const data = useSelector(cartItems);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`fixed z-30 top-0 w-full h-full  bg-black bg-opacity-20 shadow  ${
          cartSideBar ? " bg-opacity-75" : "bg-opacity-0 hidden"
        } transition-opacity duration-500`}
      ></div>
      <div className="absolute z-30  overflow-hidden">
        <div
          className={`pointer-events-none fixed inset-y-0 ${
            cartSideBar ? "right-0" : "-right-full opacity-0"
          } flex pl-10 transition-all duration-500`}
        >
          <div className="pointer-events-auto ">
            <div className="flex w-[390px] h-full flex-col overflow-y-scroll bg-white shadow-xl hide-scrollbar">
              <CartCardContainer />
              {data.length !== 0 && <CartFooter />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
