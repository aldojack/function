import React from "react";
import RightArrow from "./RightArrow";

export default function CTABtn({name}) {
  return (
  <button role="button" aria-label={name} className={`flex mt-6 items-center justify-center max-w-fit border-gray-400 border-2 cursor-pointer`}>
      <div className="p-4 flex-shrink-0">
        <p className="text-sm">{name}</p>
      </div>
      <div className="items-stretch border-l-2 p-4">
      <RightArrow fillColour="#000"/>
      </div>
    </button>
  );
}
