"use client";

import React from "react";
import { useRouter } from "next/navigation";

import BrownLogo from "@/app/components/reuse/logo/BrownLogo";

const Main = () => {
  const router = useRouter();

  return (
    <>
      {/* Navigation Bar - Full Size */}
      <div className="hidden md:block">
        <div className="flex justify-start flex-row space-x-10 items-center">
          <div onClick={() => router.push("/")}>
            <BrownLogo />
          </div>
          <div
            className="cursor-pointer font-museo font-[700] text-black"
            onClick={() => router.push("/")}
          >
            Home
          </div>
          <div
            className="cursor-pointer font-museo font-[700] text-black"
            onClick={() => router.push("/about")}
          >
            About
          </div>
          <div
            className="cursor-pointer font-museo font-[700] text-black"
            onClick={() => router.push("/art-works")}
          >
            Art Works
          </div>
          <div
            className="cursor-pointer font-museo font-[700] text-black"
            onClick={() => router.push("/search")}
          >
            Search
          </div>
        </div>
      </div>

      {/* Navigation Bar - Small Size */}
      <div className="block md:hidden">
        <label
          htmlFor="drawer-mobile"
          className="cursor-pointer"
          aria-controls="drawer-mobile"
        >
          <BrownLogo />
        </label>
      </div>
    </>
  );
};

export default Main;
