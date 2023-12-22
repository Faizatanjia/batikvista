"use client";

import React from "react";
import { useRouter } from "next/navigation";

const CategoryGallery = () => {
  const router = useRouter();
  
  return (
    <div className="pt-8">
      <div className="grid grid-cols-2 gap-4">
        {/* Oil Painting */}
        <div className="relative w-full h-40 cursor-pointer">
          <div className="w-full h-full overflow-hidden rounded-xl">
            <img
              src="/mobile/category-gallery/oil-painting-category-artwork.png"
              alt="Oil Painting Category Artwork"
              className="w-full h-full bg-cover bg-center object-cover overflow-hidden"
            />
          </div>

          {/* Background overlay */}
          <div className="absolute inset-0 hover:bg-black hover:opacity-20 rounded-xl" />

          <div className="absolute left-5 bottom-3">
            <p className="font-museo font-[500] text-[17px] text-white z-10 drop-shadow-lg">
              Oil Painting
            </p>
          </div>
        </div>

        {/* Historical */}
        <div className="relative w-full h-40 cursor-pointer">
          <div className="w-full h-full overflow-hidden rounded-xl">
            <img
              src="/mobile/category-gallery/historical-category-artwork.png"
              alt="Historical Category Artwork"
              className="w-full h-full bg-cover bg-center object-cover overflow-hidden"
            />
          </div>

          {/* Background overlay */}
          <div className="absolute inset-0 bg-[#593902] hover:bg-black opacity-20 rounded-xl" />

          <div className="absolute left-5 bottom-3">
            <p className="font-museo font-[500] text-[17px] text-white z-10 drop-shadow-lg">
              Historical
            </p>
          </div>
        </div>

        {/* Artists */}
        <div 
          className="col-span-2 relative w-full h-40 cursor-pointer"
          onClick={() => {
            router.push("/mobile/artist/raden-saleh");
          }}
        >
          <div className="w-full h-full overflow-hidden rounded-xl">
            <img
              src="/mobile/category-gallery/artists-category.png"
              alt="Artists Category"
              className="w-full h-full bg-cover bg-center object-cover overflow-hidden"
            />
          </div>

          {/* Background overlay */}
          <div className="absolute inset-0 bg-[#231600] hover:bg-black opacity-20 rounded-xl" />

          <div className="absolute left-5 bottom-3">
            <p className="font-museo font-[500] text-[17px] text-white z-10 drop-shadow-lg">
              Artists
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CategoryGallery;
