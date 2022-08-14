import React from "react";

export default function CategoryButton({ text, clickHandler }) {
  return (
    <button
      onClick={clickHandler}
      className="py-2 px-10 text-sm font-medium text-slate-500 font-slab border-b-2 bg-zinc-50/40 flex-1 border-slate-200 hover:bg-purple-50 hover:border-purple-600"
    >
      {text}
    </button>
  );
}
