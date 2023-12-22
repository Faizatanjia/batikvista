"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Drawer from "@/app/components/mobile/reuse/Drawer/Main";
import NavigationBar from "@/app/components/mobile/reuse/NavigationBar/Main";

export default function Main() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Drawer>
        <NavigationBar pageName="About Us" onClick={handleBack} />
        <div className="max-w-full mt-10 px-10">
          <div className="w-full flex justify-center">
            <div>
              {/* Image thumbnail */}
              <div className="relative w-[357px] h-[319px]">
                <div className="w-full h-full overflow-hidden rounded-xl my-5">
                  <img
                    src="/mobile/about/about-us-art-illustration.png"
                    alt="About Us Art Illustration"
                    className="w-full h-full bg-cover bg-center object-cover overflow-hidden"
                  />
                </div>

                {/* Background overlay */}
                <div className="absolute inset-0 bg-black opacity-30 rounded-xl" />
              </div>

              <div className="pt-10">
                <p className="pb-10 font-museo font-bold text-secondary text-sm">
                  WHAT DRIVES US
                </p>
                <h1 className="font-carot text-[28px] leading-8 pb-14">
                  Educate Indonesians about local artist’s works, fostering
                  appreciation and cultural connection
                </h1>

                <h2 className="font-carot text-2xl pb-7">
                  Problem we aim to solve
                </h2>
                <h3 className="font-museo font-[500] text-sm">
                  Lack of exposure for Indonesian art
                </h3>
                <p className="mt-2 font-museo font-[300] text-paragraph-black text-sm pb-7">
                  This is due to the dominance of Western art in the media and
                  education system, as well as the lack of opportunities for
                  Australians to engage with Indonesian art.
                </p>

                <h3 className="font-museo font-[500] text-sm">
                  Lack of access for learning about Indonesian art
                </h3>
                <p className="mt-2 font-museo font-[300] text-paragraph-black text-sm pb-7">
                  These factors may limit their ability to learn about their own
                  culture and history, as well as the diversity and richness of
                  Indonesian art.
                </p>

                <h3 className="font-museo font-[500] text-sm">
                  Lack of awareness in Indonesian art{" "}
                </h3>
                <p className="mt-2 font-museo font-[300] text-paragraph-black text-sm pb-7">
                  Many young people may not be aware of or interested in this
                  history, or may not see how it relates to their own lives and
                  identities.
                </p>
              </div>

              <div className="pt-12">
                <h2 className="font-carot text-2xl pb-7">Our solutions</h2>
                <h3 className="font-museo font-[500] text-sm">
                  Interactive Learning Platform
                </h3>
                <p className="mt-2 font-museo font-[300] text-paragraph-black text-sm pb-7">
                  Develop an interactive website dedicated to Indonesian
                  painting culture. This platform could include virtual tours of
                  art galleries, interactive painting lessons, and history of
                  Indonesian art. Gamification elements such as quizzes, badges,
                  and leaderboards could make the learning process more
                  engaging.
                </p>
              </div>

              <div className="pt-10">
                <div className="w-full flex items-center justify-center">
                  {/* Circle CEO Image */}
                  <div className="w-[110px] h-[110px] rounded-full overflow-hidden">
                    <img
                      src="/mobile/icons/batikvista-ceo.png"
                      alt="Cindy Lau - Batik Vista CEO"
                      className="w-full h-full bg-cover bg-center"
                    />
                  </div>
                </div>
                {/* Quotes here */}
                <h2 className="font-carot font-bold text-secondary text-3xl">
                  &quot;
                </h2>
                <h2 className="font-museo font-[500] text-paragraph-black leading-6">
                  Preserving and learning about Indonesian culture, especially
                  local painting, is not just a journey into the rich tapestry
                  of our past, but a bridge to our future. The strokes of our
                  brushes are the echoes of our history, and the colors we
                  choose are the shades of our diversity. The canvas of
                  Indonesian art is vast and vibrant, waiting to be explored and
                  appreciated.
                </h2>
                <div className="pt-7 pb-20">
                  <div className="w-full flex justify-center">
                    <div className="flex flex-col">
                      <p className="font-museo font-bold text-center">
                        Christie Lau
                      </p>
                      <p className="font-museo font-[500] text-secondary text-center">
                        BatikVista CEO
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What we are proud of */}
        <div className="px-10 max-w-full bg-[#EEF4F4] pt-7 pb-20">
          <div className="max-w-full mt-10">
            <div className="w-full flex justify-center">
              <div>
                <h2 className="text-left font-carot text-2xl pb-7">
                  What we are proud of
                </h2>
                <h3 className="font-museo font-[500] text-sm">
                  We transform the way people learn art.{" "}
                </h3>
                <p className="mt-2 font-museo font-[300] text-paragraph-black text-sm pb-7">
                  We represent a paradigm shift in art education, offering
                  unprecedented opportunities for accessibility, interactivity,
                  exposure to diverse perspectives, and access to educational
                  resources. BatikVista would keep evolving on how we perceive
                  Indonesian artistic culture but are shaping a future where art
                  education knows no bounds.
                </p>

                <h3 className="font-museo font-[500] text-sm">
                  We advocate for Indonesian culture.
                </h3>
                <p className="mt-2 font-museo font-[300] text-paragraph-black text-sm pb-7">
                  BatikVista plays a pivotal role in advocating for and
                  preserving the cultural identity of Indonesia. It contributes
                  significantly to the construction of a distinct Indonesian
                  national identity. Especially in an era marked by colonial
                  influence, our artworks reflect a sense of cultural pride and
                  resilience.
                </p>

                <div className="fixed bottom-5 right-0 mb-5 mr-5 text-white">
                  <label
                    htmlFor="drawer-mobile"
                    className="bg-black rounded-full p-3 flex items-center justify-center cursor-pointer"
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
        </div>
      </Drawer>
    </div>
  );
}
