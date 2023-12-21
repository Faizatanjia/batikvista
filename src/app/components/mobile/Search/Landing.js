import React from "react";

import NavigationBar from "@/app/components/mobile/reuse/NavigationBar/Main";

const Landing = ({ setCurrentPage }) => {
  const handleContinueSearch = () => {
    setCurrentPage("searchPage");
  };

  return (
    <>
      {/* Navigation Bar */}
      <NavigationBar hidePageName={true} menu={false} />
      <div className="max-w-full mt-10 px-10">
        <div className="w-full flex justify-center">
          <div>
            <img
              alt="Search Image Gallery"
              src="/mobile/search-image-gallery.png"
            />

            <div className="pt-12 w-full flex justify-center">
              <div>
                <h1 className="font-carot text-3xl text-center">
                  Exhibition of Indonesian Cultural Artworks
                </h1>
                <p className="mt-2 font-museo font-[300] text-paragraph-subheading text-sm text-center">
                  Presented by{" "}
                  <span className="text-secondary font-[500]"> BatikVista</span>
                </p>
                <div className="mt-5 w-full flex justify-center">
                  <p className="font-museo font-[300] text-paragraph-black leading-4 text-center">
                    Search for traditional Indonesian artworks that capture our
                    cultural identity and history
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 w-full flex justify-center">
              <button
                className="w-44 px-7 py-2 bg-secondary hover:bg-secondary-hover rounded-2xl"
                onClick={handleContinueSearch}
              >
                <div className="w-full flex justify-between">
                  <p className="font-museo font-[500] text-white py-2">
                    Go Search
                  </p>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      fill="currentColor"
                      className="bi bi-arrow-right-short text-white"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
