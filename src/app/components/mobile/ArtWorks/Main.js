"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Drawer from "@/app/components/mobile/reuse/Drawer/Main";
import MusicPlayer from "@/app/components/mobile/reuse/MusicPlayer/Main";

export default function Main() {
  const router = useRouter();

  const handleNavigateToPainting = (paintingId) => {
    router.push(`/mobile/painting/${paintingId}`);
  };

  return (
    <Drawer>
      <div className="flex min-h-screen flex-col">
        {/* Navigation Bar */}
        <div className="sticky top-0 bg-white mt-4 w-full flex justify-between py-5 px-6">
          <Link className="flex items-center" href="/mobile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </Link>
          <p className="font-museo font-bold flex items-center">
            Notable Indonesian Artworks
          </p>
          <label
            className="flex items-center"
            htmlFor="drawer-mobile"
            aria-controls="drawer-mobile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </label>
        </div>
        <div className="max-w-full mt-5 px-10">
          {/* Introduction */}
          <div className="max-w-full">
            <p className="w-full font-museo font-[300] text-paragraph-black text-sm">
              Indonesia, with its diverse cultural tapestry and rich history,
              has been eloquently captured through the brushstrokes of visionary
              artists. Among the custodians of the nation&apos; cultural
              heritage are Raden Saleh, Sindudarsono Sudjojono, and Hendra
              Gunawan, whose historical paintings have become timeless
              reflections of Indonesia&apos; past, contributing to the
              collective identity and cultural legacy of the nation.
            </p>
          </div>

          {/* Notable artworks */}
          <div className="max-w-full w-full pt-16">
            {/* Perburuan Banteng */}
            <div
              className="max-w-full flex flex-row cursor-pointer space-x-4"
              onClick={() => handleNavigateToPainting("perburuan-banteng")}
            >
              <img
                className="-mt-4 w-[45px] h-[45px] object-cover mr-1"
                alt="Perburuan Banteng Icon"
                src="/mobile/art-works-icon/perburuan-banteng.png"
              />

              <div className="flex flex-col">
                <div className="rounded-full bg-black w-[10px] h-[9px]" />
                <div className="box-border mt-2 ml-1 w-px h-24 border-r border-solid border-black mb-2" />
              </div>

              <div className="-mt-4">
                <div className="tracking-[-0.03em] inline-block max-w-full">
                  <p className="font-bold font-museo text-md">
                    Perburuan Banteng
                  </p>
                </div>
                <div className="text-sm tracking-[-0.03em] text-gray inline-block max-w-full">
                  <p className="font-museo text-sm text-paragraph-subheading font-[300]">
                    Raden Saleh (1807 or 1811 - 1880)
                  </p>
                </div>
              </div>
            </div>

            {/* Pasukan Kita yang Dipimpin Pangeran Diponegoro */}
            <div
              className="max-w-full flex flex-row cursor-pointer space-x-4"
              onClick={() =>
                handleNavigateToPainting(
                  "pasukan-kita-yang-dipimpin-pangeran-diponegoro"
                )
              }
            >
              <img
                className="-mt-4 w-[45px] h-[45px] object-cover mr-1"
                alt="Perburuan Banteng Icon"
                src="/mobile/art-works-icon/pasukan-kita-yang-dipimpin-pangeran-diponegoro.png"
              />

              <div className="flex flex-col">
                <div className="rounded-full bg-black w-[10px] h-[9px]" />
                <div className="box-border mt-2 ml-1 w-px h-24 border-r border-solid border-black mb-2" />
              </div>

              <div className="-mt-4">
                <div className="tracking-[-0.03em] inline-block max-w-full">
                  <p className="font-bold font-museo text-md">
                    Pasukan Kita yang Dipimpin Pangeran Diponegoro
                  </p>
                </div>
                <div className="text-sm tracking-[-0.03em] text-gray inline-block max-w-full">
                  <p className="font-museo text-sm text-paragraph-subheading font-[300]">
                    Sindudarsono Sudjojono (1914-1986)
                  </p>
                </div>
              </div>
            </div>

            {/* Ali Sadikin pada Masa Kemerdekaan */}
            <div
              className="max-w-full flex flex-row cursor-pointer space-x-4"
              onClick={() =>
                handleNavigateToPainting("ali-sadikin-pada-masa-kemerdekaan")
              }
            >
              <img
                className="-mt-4 w-[45px] h-[45px] object-cover mr-1"
                alt="Perburuan Banteng Icon"
                src="/mobile/art-works-icon/ali-sadikin-pada-masa-kemerdekaan.png"
              />

              <div className="flex flex-col">
                <div className="rounded-full bg-black w-[10px] h-[9px]" />
                <div className="box-border mt-2 ml-1 w-px h-24 border-r border-solid border-black mb-2" />
              </div>

              <div className="-mt-4">
                <div className="tracking-[-0.03em] inline-block max-w-full">
                  <p className="font-bold font-museo text-md">
                    Ali Sadikin pada Masa Kemerdekaan
                  </p>
                </div>
                <div className="text-sm tracking-[-0.03em] text-gray inline-block max-w-full">
                  <p className="font-museo text-sm text-paragraph-subheading font-[300] max-w-full">
                    Hendra Gunawan (1918-1983)
                  </p>
                </div>
              </div>
            </div>

            {/* The Arrest of Pangeran Diponegoro */}
            <div
              className="max-w-full flex flex-row cursor-pointer space-x-4 mb-12"
              onClick={() => handleNavigateToPainting("perburuan-banteng")}
            >
              <img
                className="-mt-4 w-[45px] h-[45px] object-cover mr-1"
                alt="Perburuan Banteng Icon"
                src="/mobile/art-works-icon/the-arrest-of-pangeran-diponegoro.png"
              />

              <div className="flex flex-col">
                <div className="rounded-full bg-black w-[10px] h-[9px]" />
                <div className="box-border mt-2 ml-1 w-px h-24 border-r border-solid border-black" />
              </div>

              <div className="-mt-4">
                <div className="tracking-[-0.03em] inline-block max-w-full">
                  <p className="font-bold font-museo text-md">
                    The Arrest of Pangeran Diponegoro
                  </p>
                </div>
                <div className="text-sm tracking-[-0.03em] text-gray inline-block max-w-full">
                  <p className="font-museo text-sm text-paragraph-subheading font-[300]">
                    Raden Saleh (1807 or 1811 - 1880)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Music Player */}
        <MusicPlayer />
        
      </div>
    </Drawer>
  );
}
