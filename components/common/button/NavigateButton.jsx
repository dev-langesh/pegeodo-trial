import React from "react";
import Link from "next/link";

export default function NavigateButton({ href, text, varient }) {
  return (
    <Link href={href}>
      <a
        className={` font-medium py-2 px-4 rounded flex-auto border border-purple-500 text-center ${
          varient === "contained"
            ? " bg-purple-600 text-white hover:bg-white  hover:text-purple-500"
            : "bg-white text-purple-500 hover:bg-purple-500 hover:text-white"
        }  transition duration-200  tracking-wide`}
      >
        {text}
      </a>
    </Link>
  );
}
