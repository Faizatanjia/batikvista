import React from "react";
import Link from "next/link";

import DrawerLogo from "@/app/components/reuse/logo/DrawerLogo";

const Main = ({ children }) => {
  return (
    <>
      <div className="drawer">
        <input id="drawer-mobile" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side z-20">
          <label
            htmlFor="drawer-mobile"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full min-w-full bg-black-sidebar flex flex-col pb-6">
            <div className="pt-20 w-full flex justify-center">
              <div>
                <DrawerLogo />
                <div className="w-full flex justify-center pt-20">
                  <ul className="font-carot text-[#5D5D5D] text-center text-[22px] flex flex-col space-y-8">
                    {/* Sidebar content here */}
                    <li>
                      <Link
                        className={`hover:text-white hover:font-bold w-full flex justify-center`}
                        href="/mobile/"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`hover:text-white hover:font-bold w-full flex justify-center`}
                        href="/mobile/about"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`hover:text-white hover:font-bold w-full flex justify-center`}
                        href="/mobile/art-works"
                      >
                        Art works
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`hover:text-white hover:font-bold w-full flex justify-center`}
                        href="/mobile/search"
                      >
                        Search
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="absolute bottom-2 right-0 mb-5 mr-5 z-10">
              <label
                htmlFor="drawer-mobile"
                className="bg-white rounded-full p-3 flex items-center justify-center"
                aria-controls="drawer-example"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-x-lg text-black"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
