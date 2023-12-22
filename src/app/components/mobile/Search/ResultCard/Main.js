"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ResultCard = ({
  id,
  title = "",
  artist = "",
  imageUrl="",
  tags = []
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/mobile/painting/${id}`);
  }

  return (
  <div 
    className="pb-7"
    onClick={handleClick}
  >
    <div className="w-full border border-[#EEF4F4] py-3 px-7 rounded-xl cursor-pointer">
      <div className="w-full flex justify-center">
        <div className="w-full">
          <h3 className="font-carot">{title}</h3>
          <p className="font-museo font-[300] text-xs text-paragraph-subheading">{artist}</p>
          
          <div className="w-full h-36 overflow-hidden rounded-xl my-3">
            <img 
              src={imageUrl}
              alt={title}
              className="w-full h-full bg-cover bg-center object-cover overflow-hidden"
            />
          </div>

          {/* Tags here */}
          <div className="flex justify-start w-3/4">
            {tags.length > 0 && (
              <div className="grid grid-cols-2 gap-2">
                {tags.map((tag, index) => (
                  <div className="px-3 py-1.5 bg-[#EEF4F4] rounded-md" key={index}>
                    <p className="font-museo font-[500] text-[10px] text-center text-[#888B95]">{tag}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    
  </div>
  );
};

export default ResultCard;
