import React from "react";
import Link from "next/link";

export default function ModifyButton({ text, href }) {
  return (
    <Link href={href}>
      <a className="bg-purple-200 text-purple-700 p-8 inline-block rounded w-full md:w-auto flex-1 text-center">
        {text}
      </a>
    </Link>
  );
}
