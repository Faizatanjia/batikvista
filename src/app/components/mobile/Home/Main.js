import React from "react";

import Drawer from "@/app/components/mobile/reuse/Drawer/Main";
import WhiteLogo from "@/app/components/reuse/logo/WhiteLogo";

export default function Main() {
  return (
    <Drawer>
      <div className="flex min-h-screen flex-col bg-mobile-landing bg-cover bg-center">
        <div className="p-5">
          <div>
            <WhiteLogo />
          </div>

          <div className="absolute ml-3 bottom-2 text-white mb-16">
            <div className="font-carot text-3xl">
              <h1>Exploring</h1>
              <h2>Indonesia&apos;s</h2>
              <h2>Traditional Paintings</h2>
            </div>

            <div className="pt-4 w-full flex justify-between space-x-5">
              <button className="border border-white font-museo font-[500] text-white text-lg w-40 rounded-md px-4 py-3">
                Get Started
              </button>
              <div className="flex items-center">
                <img src="/mobile/line-divider.png" alt="Line divider" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-2 right-0 mb-5 mr-5 text-white">
            <label
              htmlFor="drawer-mobile"
              className="bg-white rounded-full p-3 flex items-center justify-center"
              aria-controls="drawer-example"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                fill="currentColor"
                className="bi bi-list text-black"
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
    </Drawer>
  );
}
