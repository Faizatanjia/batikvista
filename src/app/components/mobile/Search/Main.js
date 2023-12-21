"use client";

import React, { useState } from "react";

import Landing from "./Landing";
import Search from "./Search";

export default function Main() {
  const [currentPage, setCurrentPage] = useState("landingSearchPage");

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {currentPage === "searchPage" ? (
        <Search setCurrentPage={setCurrentPage} />
      ) : (
        <Landing setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}
