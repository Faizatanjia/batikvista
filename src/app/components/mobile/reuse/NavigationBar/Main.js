"use client";

import React from "react";

const NavigationBar = ({ 
  style = "",
  hidePageName = false,
  pageName="", 
  menu = false,
  onClick = () => {}
 }) => {
  return (
    <div className={`sticky z-10 top-0 bg-white pt-10 w-full flex justify-between py-5 ${(hidePageName || !menu) ? "px-10" : "px-6"}`}>
      <button className="flex items-center" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </button>
      {!hidePageName ? (
        <p className="font-museo font-bold flex items-center">{pageName}</p>
      ) : <div></div>}
      {menu ? (
        <label
          className="flex items-center"
          htmlFor="drawer-mobile"
          aria-controls="drawer-mobile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </label>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default NavigationBar;
