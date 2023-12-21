import React from "react";

import Drawer from "@/app/components/mobile/reuse/Drawer/Main";
import NavigationBar from "@/app/components/mobile/reuse/NavigationBar/Main";

import SearchBar from "./SearchBar/Main";
import FilterSelect from "./FilterSelect/Main";
import CategoryGallery from "./CategoryGallery/Main";
import ResultCard from "./ResultCard/Main";

const Search = ({ setCurrentPage }) => {
  const handleBack = () => {
    setCurrentPage("landingSearchPage");
  };

  return (
    <Drawer>
      <NavigationBar pageName="Search" onClick={handleBack} />
      <div className="max-w-full mt-10 px-10">
        <div className="w-full flex justify-center">
          <div>
            <h1 className="font-carot text-3xl">What are you looking for?</h1>

            <SearchBar />

            <div className="pt-7 w-full flex flex-row justify-end space-x-3 font-museo">
              <p className="flex items-center text-sm font-bold text-[#888B95]">
                Sort by:
              </p>
              <FilterSelect />
            </div>

            <CategoryGallery />

            {/* Results List */}
            <div className="pt-10">
              <h3 className="font-museo font-semibold text-lg">Results</h3>
              <div className="py-5">
                <ResultCard
                  title="The Arrest of Pangeran Diponegoro"
                  artist="Raden Saleh Syarif Bustaman (1807 or 1811 - 1880)"
                  imageUrl="/mobile/search-card/the-arrest-of-pangeran-diponegoro.png"
                  tags={[
                    "Raden Saleh",
                    "Oil painting",
                    "Historical",
                    "Romantic",
                  ]}
                />

                <ResultCard
                  title="Ali Sadikin Pada Masa Kemerdekaan"
                  artist="Hendra Gunawan (1918-1983)"
                  imageUrl="/mobile/search-card/ali-sadikin-pada-masa-kemerdekaan.png"
                  tags={[
                    "Ali Sadikin",
                    "Oil painting",
                    "Historical",
                  ]}
                />
                
              </div>
            </div>

            <div className="fixed bottom-5 right-0 mb-5 mr-5 text-white">
              <label
                htmlFor="drawer-mobile"
                className="bg-black rounded-full p-3 flex items-center justify-center"
                aria-controls="drawer-mobile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  fill="currentColor"
                  className="bi bi-list text-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Search;
