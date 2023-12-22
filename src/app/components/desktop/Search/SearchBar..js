import React from "react";

const SearchBar = () => {
  return (
    <div className="pt-7">
      <div className="flex flex-row w-full bg-[#EBD7B5] py-5 px-6 rounded-xl">
        <div className="flex items-center mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-search text-[#393939]"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>

        <input
          className="w-full bg-transparent font-museo font-[300] text-sm md:text-lg placeholder:text-paragraph-subheading text-paragraph-black outline-none flex items-center"
          type="text"
          placeholder="Search for artworks or artists..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
