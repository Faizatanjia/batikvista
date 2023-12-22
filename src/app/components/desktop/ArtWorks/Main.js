"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Drawer from "@/app/components/mobile/reuse/Drawer/Main";
import BrownLogo from "@/app/components/reuse/logo/BrownLogo";
import NotableArtworks from "./NotableArtworks";
import MusicPlayer from "@/app/components/desktop/reuse/MusicPlayer/Main";

export default function Main() {
  const router = useRouter();

  return (
    <Drawer>
      <div className="min-h-screen min-w-full bg-white">
        <div className="w-full px-5 py-5 lg:px-20 lg:pt-5 lg:pb-10">
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

            <div className="w-full flex justify-center">
                {/* Hero - Big Screen*/}
                <div className="hidden lg:flex w-full justify-between lg:pr-14">
                    <div className="w-1/2 flex items-center">
                        <div>
                            <h1 className="font-carot font-bold text-[#2B2B2B] text-[65px] leading-[5rem]">Notable Indonesian Artworks</h1>
                            <p className="font-carot italic text-[#484848] text-2xl">1805-1900s</p>
                            <p className="pt-7 font-carot text-[#606060] leading-6">Indonesia, with its diverse cultural tapestry and rich history, has been eloquently captured through the brushstrokes of visionary artists. Among the custodians of the nation's cultural heritage are Raden Saleh, Sindudarsono Sudjojono, and Hendra Gunawan, whose historical paintings have become timeless reflections of Indonesia&apos; past, contributing to the collective identity and cultural legacy of the nation.</p>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="w-[460px] h-[577px]">
                        <img 
                            src="/desktop/art-works/art-works-header-image.png" 
                            alt="Art works header image"
                            className="w-full h-full bg-cover bg-center object-cover rounded-2xl overflow-hidden"
                        />
                    </div>
                </div>

                {/* Hero - Small Screen */}
                <div className="flex lg:hidden w-full flex-col">
                    {/* Image */}
                    <div className="w-full flex justify-center">
                        <div>
                            <div className="w-full flex justify-center">
                                <div className="w-[300px] h-[300px]">
                                    <img 
                                        src="/desktop/art-works/art-works-header-image.png" 
                                        alt="Art works header image"
                                        className="w-full h-full bg-cover bg-center object-cover rounded-2xl overflow-hidden"
                                    />
                                </div>
                            </div>
                            
                            <div className="w-full flex justify-center">
                                <div>
                                    <h1 className="pt-5 font-carot font-bold text-[#2B2B2B] text-3xl text-center">Notable Indonesian Artworks</h1>
                                    <p className="font-carot italic text-[#484848] text-lg text-center">1805-1900s</p>
                                    <div className="w-full flex justify-center">
                                        <p className="pt-7 font-carot text-[#606060] text-md leading-5">Indonesia, with its diverse cultural tapestry and rich history, has been eloquently captured through the brushstrokes of visionary artists. Among the custodians of the nation's cultural heritage are Raden Saleh, Sindudarsono Sudjojono, and Hendra Gunawan, whose historical paintings have become timeless reflections of Indonesia&apos; past, contributing to the collective identity and cultural legacy of the nation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notable Artworks */}
            <NotableArtworks />
        </div>
        
        {/* Music Player */}
        <MusicPlayer />
      </div>
    </Drawer>
  );
}
