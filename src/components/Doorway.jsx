import React from "react";
import doorway from "../assets/doorway-1.png";
import RightArrow from "../assets/right-arrow-black.svg";

export default function Doorway({heading, description, img}) {
  return (
    <article className="flex flex-col mx-6 my-4 md:max-w-[550px]">
      <img src={img} />
      <div className="max-w-[440px] mt-8 text-[13px]">
        <h3 className=" text-base">{heading}</h3>
        <p className="text-[#808080]">
          {description}
        </p>
        <div className="flex mt-6 items-center justify-center max-w-[125px] border-gray-400 border-2 cursor-pointer">
          <div className="p-4 flex-shrink-0">
            <p>Shop All</p>
          </div>
          <div className="items-stretch border-l-2 p-4">
            <img src={RightArrow} className="fill-black" />
          </div>
        </div>
      </div>
    </article>
  );
}
