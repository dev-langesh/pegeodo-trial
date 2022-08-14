import React from "react";
import { accountSideBarState } from "../../src/features/account/accountSidebarSlice";
import AccountHeader from "./AccountHeader";
import { useSelector } from "react-redux";
import {
  accountDetails,
  accountLoadingStatus,
} from "../../src/features/account/accountDetailsSlice";
import { Button, LinearProgress } from "@mui/material";

export default function Container() {
  const accountSideBar = useSelector(accountSideBarState);
  const loading = useSelector(accountLoadingStatus);
  const account = useSelector(accountDetails);

  function logout() {
    window.localStorage.clear();
    window.location.reload();
  }

  return (
    <>
      <div
        className={`fixed z-30 top-0 w-full h-full  bg-black bg-opacity-20 shadow  ${
          accountSideBar ? " bg-opacity-75" : "bg-opacity-0 hidden"
        } transition-opacity duration-500`}
      ></div>
      <div className="absolute z-30  overflow-hidden">
        <div
          className={`pointer-events-none fixed inset-y-0 ${
            accountSideBar ? "right-0" : "-right-full opacity-0"
          } flex pl-10 transition-all duration-500`}
        >
          <div className="pointer-events-auto ">
            <div className="flex w-[390px] h-full flex-col overflow-y-scroll bg-white shadow-xl hide-scrollbar">
              {loading && <LinearProgress />}
              <AccountHeader />
              <section className="space-y-6 px-4">
                <h2 className="text-slate-600">Name : {account.name}</h2>
                <p className=" text-gray-600">Email : {account.email}</p>
                <p className=" text-gray-600">Mobile : {account.mobile}</p>
                <div className="grid w-full place-items-center">
                  <Button onClick={logout}>Logout</Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
