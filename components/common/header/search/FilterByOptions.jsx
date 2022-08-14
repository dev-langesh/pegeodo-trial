import React from "react";

export default function FilterByOptions() {
  return (
    <ul
      className={`bg-white shadow absolute top-full w-full text-black z-20 overflow-auto custom-scrollbar ${
        openOptions ? "max-h-52" : "h-0"
      } transition-all duration-300`}
    >
      {["name", "category", "price", "star"].map((item) => {
        return (
          <li
            key={item.id}
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
