import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../../../src/features/cart/cartSideBarSlice";
import { navWithAuthObj } from "../navigateObj";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import {
  loadCart,
  setCartLoading,
  updateSubTotal,
} from "../../../src/features/cart/cartSlice";
import { openAccountBar } from "../../../src/features/account/accountSidebarSlice";
import ResponseMessage from "../ResponseMessage";
import {
  accountDetails,
  setAccountDatails,
} from "../../../src/features/account/accountDetailsSlice";

export default function LoggedInHeaderContent() {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const account = useSelector(accountDetails);

  async function onCartClicked() {
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
      {error && <ResponseMessage error={error} />}
      {navWithAuthObj.map((item) => {
        return (
          <Link key={item.key} href={item.href}>
            <a className="hover:underline underline-offset-1 decoration-dotted">
              {item.title}
            </a>
          </Link>
        );
      })}
      <IconButton
        onClick={onCartClicked}
        sx={{ color: "white" }}
        className=" !text-white "
      >
        <ShoppingCartIcon />
      </IconButton>

      <IconButton onClick={onAccountClicked} sx={{ color: "white" }}>
        <AccountCircleIcon />
      </IconButton>
    </>
  );
}
