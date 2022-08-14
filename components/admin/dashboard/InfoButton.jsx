import React from "react";

export default function InfoButton({ text }) {
  return (
    <span
      className={`bg-yellow-100 text-yellow-600 p-4 inline-block rounded flex-shrink-0 w-11/12 md:w-[200px] text-center `}
    >
      {text}
    </span>
  );
}
