import React, { useEffect, useState } from "react";
import DropdownList from "./DorpdownList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useRouter } from "next/router";

export default function Search() {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  function changeHandler(e) {
    setSearchValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    router.push(`/products/${searchValue}`);
    setLoading(false);
    setSearchValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="relative ">
      <input
        onChange={changeHandler}
        type="text"
        value={searchValue}
        placeholder={loading ? "Loading..." : "Search"}
        className="border px-3 py-1 w-full outline-none focus:border-white bg-transparent placeholder:text-white"
      />
    </form>
  );
}
