"use client";

import React from "react";
import { useRouter } from "next/navigation";

const NotableArtworks = () => {
  const router = useRouter();

  const handleNavigateToPainting = (paintingId) => {
    router.push(`/mobile/painting/${paintingId}`);
  };

  return (
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
            <p className="font-bold font-museo text-md">Perburuan Banteng</p>
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
          alt="Pasukan Kita yang Dipimpin Pangeran Diponegoro Icon"
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
        onClick={() => handleNavigateToPainting("the-arrest-of-pangeran-diponegoro")}
      >
        <img
          className="-mt-4 w-[45px] h-[45px] object-cover mr-1"
          alt="The Arrest of Pangeran Diponegoro Icon"
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
  );
};

export default NotableArtworks;
