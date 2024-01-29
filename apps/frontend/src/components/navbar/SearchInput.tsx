"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

type Props = {};

function SearchInput({}: Props) {
  const [searchField, setSearchField] = useState("");

  return (
    <div className="relative w-full">
      <input
        type="text"
        maxLength={28}
        value={searchField}
        placeholder="Artistes, titres, albums..."
        onChange={(e) => setSearchField(e.target.value)}
        className="bg-[#29282D] rounded-lg hover:bg-[#3A393D] p-3 focus:ring-2 focus:ring-violet-700 focus:outline-none text-white w-1/4 ease-in-out transition"
        style={{ paddingLeft: '50px' }}
      />
      <CiSearch
        style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}
        size={28}
      />
    </div>
  );
}

export default SearchInput;
