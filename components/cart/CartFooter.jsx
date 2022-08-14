import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutPrice } from "../../src/features/cart/cartSlice";
import Link from "next/link";
import { closeCart } from "../../src/features/cart/cartSideBarSlice";

export default function CartFooter() {
  const checkout = useSelector(checkoutPrice);
  const dispatch = useDispatch();

  return (
    <footer className="border-t border-gray-200 py-6 px-4 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-600 font-slab">
        <p>Subtotal</p>
        <p className="text-sm">Rs. {checkout} </p>
      </div>
      <p className="mt-0.5 text-sm text-gray-500">
        Shipping and taxes calculated at checkout.
      </p>
      <div className="mt-6">
        <a
          href="#"
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 font-slab tracking-wider text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Checkout
        </a>
      </div>
      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
          or{" "}
          <Link href="/">
            <a
              onClick={() => dispatch(closeCart())}
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </Link>
        </p>
      </div>
    </footer>
  );
}
