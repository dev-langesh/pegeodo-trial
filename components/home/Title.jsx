import React from "react";

export default function Title({ text }) {
  return (
    <header className="flex flex-col items-center justify-center space-y-2">
      <h1 className="text-2xl font-bold pt-6 font-slab text-center text-gray-500 tracking-wide ">
        {text}
      </h1>
      <span className="rounded-2xl w-20 h-1 bg-indigo-600"></span>
    </header>
  );
}
