"use client";

import React, { useState, useEffect } from "react";

import Drawer from "@/app/components/mobile/reuse/Drawer/Main";

const Main = ({ data }) => {
  const [showExpanded, setShowExpanded] = useState(false);

  const toggleExpand = () => {
    setShowExpanded(true);
  };

  useEffect(() => {
    if (showExpanded) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showExpanded])

  return (
    <Drawer>
      {showExpanded && (
        <div className="relative w-full h-72">
          <div className="w-full h-full overflow-hidden">
            <img
              src={data.imageUrlExpanded}
              alt={`${data.title} - Expanded`}
              className="w-full h-full bg-cover bg-center"
            />
          </div>

          {/* Background overlay */}
          <div className="absolute inset-0 bg-black opacity-[35%]" />

          {/* Handle */}
          <div className="absolute top-5 flex w-full justify-center">
            <div className="box-border w-16 border-t-[7px] border-solid border-[#DEE2E5] rounded-xl mb-10 flex" />
            {/* <div className="w-full flex justify-center">
              </div> */}
          </div>

        </div>
      )}
      <div className={`max-w-full ${showExpanded ? "mt-2.5" : "mt-10"} px-10`}>
        <div className="w-full flex justify-center">
          <div>
            {!showExpanded && (
              <div className="w-full flex justify-center">
                <div className="box-border w-16 h-2 border-t-[7px] border-solid border-[#DEE2E5] rounded-md mb-10 flex" />
              </div>
            )}

            {/* Minimized Image */}
            {!showExpanded && (
              <div className="w-full flex justify-center">
                <div className="w-[250px] h-[250px] overflow-hidden rounded-3xl">
                  <img
                    src={data.imageUrlMinimized}
                    alt={`${data.title} - Minimized`}
                    className="w-full h-full bg-cover bg-center"
                  />
                </div>
              </div>
            )}

            {/* Four circles */}
            <div className="pt-6 w-full flex justify-center">
              <div className="flex flex-row space-x-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#93969B] " />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F0F3F6] " />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F0F3F6] " />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F0F3F6] " />
              </div>
            </div>

            {/* Title and Subtitle */}
            <div className="pt-7">
              <h1 className="font-carot text-3xl">{data.title}</h1>
              <p className={`${showExpanded ? "font-carot italic" : "font-museo"} font-[300] text-paragraph-subheading text-sm`}>
                {data.subTitle}
              </p>
            </div>

            {/* Introduction with Read More */}
            <div className={`${!showExpanded ? "pt-5" : "pt-2.5"}`}>
              <p className="font-museo font-[300] text-sm leading-5 text-black-sidebar">
                {data.introduction}
                {!showExpanded && (
                  <>
                    <span>...</span>
                    <span
                      className="font-bold cursor-pointer hover:text-secondary"
                      onClick={toggleExpand}
                    >
                      Read more
                    </span>
                  </>
                )}
              </p>
            </div>

            {/* Tags */}
            {!showExpanded && (
              <div className="pt-7 flex justify-start w-5/6">
                {data.tags.length > 0 && (
                  <div className="grid grid-cols-3 gap-2">
                    {data.tags.map((tag, index) => (
                      <div
                        className="px-3 py-1.5 bg-[#EEF4F4] rounded-md"
                        key={index}
                      >
                        <div className="h-full flex items-center justify-center">
                          <p className="font-museo font-[500] text-xs text-center text-[#888B95]">
                            {tag}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Blog Content and Sub Titles */}
            {showExpanded && (
              <div>
                {data.blogContent.map((blogContent, index) => (
                  <div key={index} className={`${data.type === "artist" ? "pt-10" : "pt-7"}`}>
                    <div className="relative flex py-5 items-center">
                      <span className="flex-shrink mr-4 font-carot text-3xl">{blogContent.title}</span>
                      <div className="flex-grow border-t border-black"></div>
                    </div>

                    {/* Paragraph content */}
                    <div>
                      {blogContent.content.map((content, index) => (
                        <p key={index} className="font-museo text-sm font-black-sidebar font-[300] pb-5">
                          {content}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Artist image detail */}
            {showExpanded && data.type === "artist" && (
              <div className="pt-8">
                <img 
                  alt={`Detail of ${data.title}`}
                  src={data.artistDetailImageUrl}
                  className="w-full h-full"
                />
                <div className="pt-3 w-full flex justify-center">
                  <div>
                    <h2 className="font-carot text-2xl text-center">Detail of {data.title}</h2>
                    <p className="font-carot font-bold text-xs text-center">Further Read - {data.title}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Audio Player */}
            <div className="mt-14 mb-12 relative z-10 rounded-xl">
              <h3 className="font-museo font-bold text-lg pb-5">Audio Guide</h3>
              <div className="transition-all duration-500transition-all duration-500 pb-6 space-y-6">
                <div className="space-y-2">
                  <div className="relative">
                    <div className="bg-[#B5B5B5] transition-all duration-500 rounded-full overflow-hidden">
                      <div
                        className="bg-black-sidebar transition-all duration-500 w-1/2 h-2"
                        role="progressbar"
                        aria-label="music progress"
                        aria-valuenow="1456"
                        aria-valuemin="0"
                        aria-valuemax="4550"
                      ></div>
                    </div>
                    <div className="transition-all duration-500 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow" />
                  </div>
                  <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
                    <div className="font-museo font-bold transition-all duration-500 ">
                      08:00
                    </div>
                    <div className="font-museo text-paragraph-subheading transition-all duration-500 ">
                      15:50
                    </div>
                  </div>
                </div>
              </div>
              {/* Controls */}
              <div className="w-full flex justify-center">
                <div className="flex flex-row space-x-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="currentColor"
                      className="bi bi-rewind-fill text-[#D8E0ED]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696z" />
                      <path d="M.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696L.404 7.304Z" />
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      fill="currentColor"
                      className="bi bi-play-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
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

export default Main;
