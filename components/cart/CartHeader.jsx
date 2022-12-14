import React from "react";
import { useDispatch } from "react-redux";
import { closeCart } from "../../src/features/cart/cartSideBarSlice";

export default function CartHeader() {
  const dispatch = useDispatch();

  return (
    <div className="flex items-start justify-between">
      <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
        Shopping cart
      </h2>
      <div className="ml-3 flex h-7 items-center">
        <button
          type="button"
          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Close panel</span>
          <svg
            onClick={() => dispatch(closeCart())}
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
