import React from "react";

const Main = () => {
  return (
    <div className="sticky bottom-0 w-full">
      <div className="bg-white w-full !shadow-gray-700 !shadow-lg rounded-t-lg py-3 px-5">
        <div className="w-full">
          <div>
            <div className="w-full flex justify-center">
              <div className="box-border w-16 h-2 border-t-[7px] border-solid border-[#DEE2E5] rounded-md mb-5 flex" />
            </div>

            <div className="w-full flex justify-between items-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                </svg>
              </div>

              <div className="flex items-center">
                <img
                  className="w-[45px] h-[45px] object-cover flex items-center"
                  alt="Jali Jali Icon"
                  src="/mobile/icons/jali-jali-icon.png"
                />
              </div>

              <div className="flex flex-col font-museo items-center">
                <h3 className="font-[500] text-center text-sm">
                  Jali-Jali (Folk Melodies Orchestra)
                </h3>
                <p className="font-[300] text-center text-xs text-paragraph-subheading">
                  Shi Li . 2012
                </p>
              </div>

              <div className="flex flex-row items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    fill="currentColor"
                    className="bi bi-pause-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="currentColor"
                    className="bi bi-fast-forward-fill text-[#D8E0ED]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696z" />
                    <path d="M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;