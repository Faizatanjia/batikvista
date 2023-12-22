"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Drawer from "@/app/components/mobile/reuse/Drawer/Main";
import WhiteLogo from "@/app/components/reuse/logo/WhiteLogo";

export default function Main() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/art-works");
  };

  return (
    <Drawer>
      <div className="min-h-screen min-w-full bg-desktop-landing bg-cover bg-center">
        <div className="w-full px-5 py-5 lg:px-20 lg:pt-5 lg:pb-10">
          {/* Navigation Bar - Full Size */}
          <div className="hidden md:block">
            <div className="flex justify-start flex-row space-x-10 items-center">
              <div onClick={() => router.push("/")}>
                <WhiteLogo />
              </div>
              <div 
                className="cursor-pointer font-museo font-[700] text-white"
                onClick={() => router.push("/")}
              >
                Home
              </div>
              <div 
                className="cursor-pointer font-museo font-[700] text-white"
                onClick={() => router.push("/about")}
              >
                About
              </div>
              <div 
                className="cursor-pointer font-museo font-[700] text-white"
                onClick={() => router.push("/art-works")}
              >
                Art Works
              </div>
              <div 
                className="cursor-pointer font-museo font-[700] text-white"
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
              <WhiteLogo />
            </label>
          </div>

          <div className="pt-80 pb-20 md:pb-28 lg:pb-32 text-white">
            <div className="font-carot text-3xl md:text-5xl">
              <h1>Exploring Indonesia&apos;s</h1>
              <h2>Traditional Paintings</h2>
              <p className="font-operina text-4xl md:text-6xl">
                Bali Life, Li Man Fong (Indonesian, 1913 to 1988)
              </p>
            </div>

            <div className="pt-6 w-full flex justify-between space-x-5">
              <button
                className="border border-white font-museo font-[500] text-white text-md md:text-lg w-48 rounded-xl px-4 py-3 hover:bg-white hover:text-paragraph-black"
                onClick={handleGetStarted}
              >
                Get Started
              </button>
              <div className="flex items-center">
                <img src="/desktop/line-divider.png" alt="Line divider" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
