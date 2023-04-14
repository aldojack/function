import React from "react";
import RightArrow from "../assets/right-arrow-black.svg";

export default function CTABtn({name, width}) {
  return (
    <div className={`flex mt-6 items-center justify-center max-w-[${width}] border-gray-400 border-2 cursor-pointer`}>
      <div className="p-4 flex-shrink-0">
        <p>{name}</p>
      </div>
      <div className="items-stretch border-l-2 p-4">
        <img src={RightArrow} className="fill-black" />
      </div>
    </div>
  );
}
