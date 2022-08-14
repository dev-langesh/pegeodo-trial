import React from "react";

export default function DorpdownList({
  optionsData,
  changeSearchValue,
  openOptions,
}) {
  return (
    <ul
      className={`bg-white shadow absolute top-full w-full text-black z-20 overflow-auto custom-scrollbar ${
        openOptions ? (optionsData.length < 6 ? "h-max-52" : "h-52") : "h-0"
      } transition-all duration-300`}
    >
      {optionsData.map((item) => {
        return (
          <li
            key={item._id}
            onClick={() => changeSearchValue(item.name)}
            className="p-2 hover:bg-slate-100/75 cursor-pointer text-gray-500 "
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}
