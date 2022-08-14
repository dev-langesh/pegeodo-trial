import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { open } from "../../../src/features/sidebarSlice";
import { signin, logout } from "../../../src/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoggedInHeaderContent from "./LoggedInHeaderContent";
import Search from "./search/Search";

export default function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.value);

  useEffect(() => {
    dispatch(signin(window.localStorage.getItem("token")));
  }, []);

  return (
    <header className="flex bg-gradient-to-r font-medium from-indigo-600 to-purple-600 text-white  sm:py-2 py-1 px-6 justify-between items-center space-x-10">
      <Link href="/">
        <a className="text-lg tracking-wide text-white ">Pegeodo</a>
      </Link>{" "}
      <div className="hidden sm:block flex-1">
        <Search />
      </div>
      <section className="hidden sm:block space-x-7">
        {auth ? (
          <LoggedInHeaderContent />
        ) : (
          <>
            <Link href="/auth/register">
              <a className="hover:underline underline-offset-1 decoration-dotted">
                Register
              </a>
            </Link>{" "}
            <Link href="/auth/login">
              <a className="hover:underline underline-offset-1 decoration-dotted text-purple-500 bg-white py-1 px-2">
                Login
              </a>
            </Link>
          </>
        )}
      </section>
      <button
        onClick={() => dispatch(open())}
        className="p-2 hover:cursor-pointer block sm:hidden"
      >
        <MenuIcon />
      </button>
    </header>
  );
}
