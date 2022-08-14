import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navWithAuthObj } from "./navigateObj";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../src/features/sidebarSlice";
import { useRouter } from "next/router";
import { Divider, IconButton } from "@mui/material";
import { openCart } from "../../src/features/cart/cartSideBarSlice";
import { openAccountBar } from "../../src/features/account/accountSidebarSlice";
import {
  loadCart,
  setCartLoading,
  updateSubTotal,
} from "../../src/features/cart/cartSlice";
import {
  accountDetails,
  setAccountDatails,
} from "../../src/features/account/accountDetailsSlice";

export default function SideNav() {
  const state = useSelector((state) => state.sidebar.value);
  const dispatch = useDispatch();
  const [navObj, setNavObj] = useState([]);
  const router = useRouter();
  const auth = useSelector((state) => state.auth.value);
  const account = useSelector(accountDetails);

  useEffect(() => {
    setNavObj(navWithAuthObj);
  }, [auth]);

  function closeSideBar() {
    dispatch(close());
  }

  async function onCartClicked() {
    closeSideBar();
    dispatch(openCart());
    dispatch(setCartLoading(true));

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    if (data) {
      dispatch(loadCart(data.cart));
      dispatch(updateSubTotal());
    }
  }

  async function onAccountClicked() {
    closeSideBar();
    dispatch(openAccountBar());
    if (!account.name) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/account`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        dispatch(setAccountDatails(data));
      }
    }
  }

  return (
    <>
      <div
        className={`fixed z-30 top-0 w-full h-full  bg-black bg-opacity-20 shadow  ${
          state === "open" ? " bg-opacity-75" : "bg-opacity-0 hidden"
        } transition-opacity duration-500`}
      ></div>
      <aside
        className={`absolute top-0 left-0 transform ${
          state === "open" ? "translate-x-0" : "-translate-x-[250px]"
        } w-[250px] bg-white shadow shadow-indigo-200 h-screen flex flex-col transition duration-200 sm:hidden z-50`}
      >
        <header className="flex w-full items-center justify-between px-4">
          <Link href="/">
            <a
              onClick={closeSideBar}
              className="pl-3 text-xl font-slab font-semibold text-indigo-500 tracking-wider py-3"
            >
              Pegeodo
            </a>
          </Link>
          <IconButton onClick={closeSideBar}>
            <svg
              className="h-6 w-5 text-gray-500"
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
          </IconButton>
        </header>
        <Divider />
        <nav className="flex flex-col space-y-1 flex-1">
          <>
            {navObj.map((item) => {
              return (
                <Navigate
                  close={closeSideBar}
                  key={item.key}
                  href={item.href}
                  title={item.title}
                />
              );
            })}
            <button
              onClick={onCartClicked}
              className="block text-left hover:bg-purple-50 hover:text-purple-600 p-3 hover:tracking-widest hover:border-r-4 border-purple-400 transition-all duration-150"
            >
              Cart
            </button>
            <button
              onClick={onAccountClicked}
              className="block text-left hover:bg-purple-50 hover:text-purple-600 p-3 hover:tracking-widest hover:border-r-4 border-purple-400 transition-all duration-150"
            >
              Account
            </button>
          </>
        </nav>
      </aside>
    </>
  );
}

function Navigate({ href, title, close }) {
  return (
    <Link href={`${href}`}>
      <a
        onClick={close}
        className="block hover:bg-purple-50 hover:text-purple-600 p-3 hover:tracking-widest hover:border-r-4 border-indigo-400 transition-all duration-150"
      >
        {title}
      </a>
    </Link>
  );
}
