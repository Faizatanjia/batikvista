"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Drawer from "@/app/components/mobile/reuse/Drawer/Main";
import WhiteLogo from "@/app/components/reuse/logo/WhiteLogo";

const Main = ({ data }) => {
  const router = useRouter();

  return (
    <Drawer>
      <div className="relative w-auto min-h-screen">
        <div className="w-full h-full overflow-hidden">
          <img
            src={data.imageUrlExpanded}
            alt={`${data.title} - Expanded`}
            className="w-full h-full bg-cover bg-center object-cover overflow-hidden"
          />

          {/* Background overlay */}
          <div className="absolute inset-0 bg-black opacity-40" />

          <div className="absolute top-7 md:top-10 left-5 md:left-20 right-10 md:right-5 text-white">
            {/* Navigation Bar */}
            <div>
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
            </div>

            {/* About the Work */}
            <div className="pt-14 md:pt-56 w-full flex justify-center">
              {/* Work - Big Screen*/}
              <div className="hidden lg:flex w-full justify-between lg:pr-14">
                <div className="w-1/2 flex items-center">
                  <div>
                    <h1 className="font-carot text-white text-[60px] leading-[5rem]">
                      {data.title}
                    </h1>
                    <p className="font-operina text-white text-[50px] -mt-5">
                      {data.subTitle}
                    </p>

                    {/* Tags */}
                    <div className="mt-80">
                      <p className="pb-5 font-museo font-bold">Categories</p>
                      <div className="flex justify-start w-5/6">
                        {data.tags.length > 0 && (
                          <div className="grid grid-cols-3 gap-4">
                            {data.tags.map((tag, index) => (
                              <div
                                className="px-3 py-1.5 border border-white rounded-lg"
                                key={index}
                              >
                                <div className="h-full flex items-center justify-center">
                                  <p className="font-museo font-[500] text-center text-white">
                                    {tag}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Image */}
                <div className="w-1/2">
                  <h2 className="font-carot italic text-white text-[40px] -mt-5 pb-7">
                    About the work
                  </h2>
                  <p className="font-carot text-white text-lg leading-6">
                    {data.introduction}
                  </p>
                </div>
              </div>

              {/* Work - Small Screen */}
              <div className="flex lg:hidden w-full flex-col">
                {/* Section 1 */}
                <div className="w-full flex justify-center">
                  <div>
                    <div className="w-full flex justify-center">
                      <div>
                        <h1 className="pt-5 font-carot text-white text-3xl text-center">
                          {data.title}
                        </h1>
                        <p className="font-operina text-white text-[50px] -mt-4 text-center">
                          {data.subTitle}
                        </p>
                      </div>
                    </div>

                    <div className="w-full flex justify-center">
                      <div>
                        <h2 className="pt-5 italic font-carot text-white text-2xl text-center">
                          About the Work
                        </h2>
                        <div className="w-full flex justify-center">
                          <p className="pt-7 font-carot text-white text-md leading-5">
                            {data.introduction}
                          </p>
                        </div>

                    {/* Tags */}
                    <div className="mt-10">
                      <p className="pb-5 font-museo font-bold">Categories</p>
                      <div className="flex justify-start w-5/6">
                        {data.tags.length > 0 && (
                          <div className="grid grid-cols-3 gap-4">
                            {data.tags.map((tag, index) => (
                              <div
                                className="px-3 py-1.5 border border-white rounded-lg"
                                key={index}
                              >
                                <div className="h-full flex items-center justify-center">
                                  <p className="font-museo font-[500] text-center text-white">
                                    {tag}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Main;
