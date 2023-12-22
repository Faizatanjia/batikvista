"use client";

import Drawer from "@/app/components/mobile/reuse/Drawer/Main";
import NavigationBar from "@/app/components/desktop/reuse/NavigationBar/Main";
import MusicPlayer from "@/app/components/desktop/reuse/MusicPlayer/Main";

import { data } from "../../mobile/Artist/Main";

export default function Main() {
  return (
    <Drawer>
      <div className="min-h-screen min-w-full bg-white">
        <div className="w-full px-5 py-5 lg:px-20 lg:pt-5 lg:pb-10">
          <NavigationBar />

          <div className="w-full flex justify-center">
            {/* Hero - Big Screen*/}
            <div className="hidden lg:flex w-full justify-between lg:pr-14">
              <div className="w-1/2 flex items-center">
                <div>
                  <h1 className="font-carot font-bold text-[#2B2B2B] text-[65px] leading-[5rem]">
                    {data.title}
                  </h1>
                  <p className="font-carot italic text-[#484848] text-2xl">
                    {data.subTitle}
                  </p>
                  <p className="pt-7 font-carot text-[#606060] leading-6">
                    {data.introduction}
                  </p>
                </div>
              </div>
              {/* Image */}
              <div className="w-[460px] h-[577px]">
                <img
                  src="/desktop/art-works/art-works-header-image.png"
                  alt="Art works header image"
                  className="w-full h-full bg-cover bg-center object-cover overflow-hidden"
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
                        className="w-full h-full bg-cover bg-center object-cover overflow-hidden"
                      />
                    </div>
                  </div>

                  <div className="w-full flex justify-center">
                    <div>
                      <h1 className="pt-5 font-carot font-bold text-[#2B2B2B] text-3xl text-center">
                        {data.title}
                      </h1>
                      <p className="font-carot italic text-[#484848] text-lg text-center">
                        {data.subTitle}
                      </p>
                      <div className="w-full flex justify-center">
                        <p className="pt-7 font-carot text-[#606060] text-md leading-5">
                          {data.introduction}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <div className="relative flex py-5 items-center">
              <span className="flex-shrink mr-10 md:mr-20 font-carot font-bold text-3xl md:text-[50px]">
                Legacy
              </span>
              <div className="flex-grow border-t border-black"></div>
            </div>
          </div>

          {/* Paragraph content */}
          <div className="">
            {data.blogContent.map((blogContent, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-36"
              >
                {blogContent.content.map((content, index) => (
                  <p key={index} className="font-carot text-[#606060]">
                    {content}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Detail */}
          <div className="pt-20 w-full flex justify-center pb-10 md:pb-20">
            {/* Detail - Big Screen*/}
            <div className="hidden lg:flex w-full justify-between lg:pr-14">
              {/* Image */}
              <div className="w-[401px] h-[441px]">
                <img
                  src="/desktop/artist/detail-of-raden-saleh.png"
                  alt="Detail of Raden Saleh"
                  className="w-full h-full bg-cover bg-center object-cover overflow-hidden"
                />
              </div>

              <div className="w-4/5 flex items-center">
                <div className="w-full flex justify-center">
                  <div>
                    <h1 className="font-carot text-[#2B2B2B] text-4xl text-center">
                      Detail of {data.title}
                    </h1>
                    <p className="font-carot italic text-[#484848] text-lg text-center">
                      Further Read - {data.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detail - Small Screen */}
            <div className="flex lg:hidden w-full flex-col">
              {/* Image */}
              <div className="w-full flex justify-center">
                <div>
                  <div className="w-full flex justify-center">
                    <div className="w-[300px] h-[300px]">
                      <img
                        src="/desktop/artist/detail-of-raden-saleh.png"
                        alt="Detail of Raden Saleh"
                        className="w-full h-full bg-cover bg-center object-cover overflow-hidden"
                      />
                    </div>
                  </div>

                  <div className="w-full flex justify-center">
                    <div>
                      <h1 className="pt-7 font-carot text-[#2B2B2B] text-3xl text-center">
                        Detail of {data.title}
                      </h1>
                      <p className="font-carot italic text-[#484848] text-md text-center">
                        Further Read - {data.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MusicPlayer 
            artist="History Documentary . 2014"
            title="Raden Saleh - Voice Over"
        />
      </div>
    </Drawer>
  );
}
