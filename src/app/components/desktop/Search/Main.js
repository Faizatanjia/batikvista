"use client";

import React from "react";

import Drawer from "@/app/components/mobile/reuse/Drawer/Main";
import NavigationBar from "@/app/components/desktop/reuse/NavigationBar/Main";
import FilterSelect from "../../mobile/Search/FilterSelect/Main";
import CategoryGallery from "./CategoryGallery";
import SearchBar from "./SearchBar.";
import ResultCard from "./ResultCard";

const Main = () => {
  return (
    <Drawer>
      <div className="min-h-screen min-w-full bg-white">
        <div className="w-full px-5 py-5 lg:px-20 lg:pt-5 lg:pb-10">
          <NavigationBar />

          <div>
            <h1 className="pt-10 font-carot text-3xl md:text-5xl">What are you looking for?</h1>

            <SearchBar />

            <div className="pt-7 w-full flex flex-row justify-end space-x-3 font-museo">
              <p className="flex items-center text-sm md:text-lg font-bold text-[#888B95]">
                Sort by:
              </p>
              <FilterSelect />
            </div>

            <CategoryGallery />

            {/* Results List */}
            <div className="pt-10">
              <h3 className="font-museo font-semibold text-lg md:text-xl">Results</h3>
              <div className="py-5">
                <ResultCard
                  id="the-arrest-of-pangeran-diponegoro"
                  title="The Arrest of Pangeran Diponegoro"
                  artist="Raden Saleh Syarif Bustaman (1807 or 1811 - 1880)"
                  imageUrl="/mobile/painting/the-arrest-of-pangeran-diponegoro/full-image.png"
                  tags={[
                    "Raden Saleh",
                    "Oil painting",
                    "Historical",
                    "Romantic",
                  ]}
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Main;
