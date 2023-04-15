import React from "react";
import RightArrow from "./RightArrow";

export default function Banner() {
  return (
    <section className="w-full flex justify-center items-center bg-[#19291C] text-white">
      <div className="text-center px-6 py-12 flex flex-col items-center max-w-[18.75rem] md:max-w-full">
        <h3 className=" text-xl md:text-2xl">
          Get your gifts in time for the holidays
        </h3>
        <p className=" opacity-50 text-sm mt-2">
          Free, extended returns until January
        </p>
        <button className="flex mt-6 items-center justify-center min-w-fit border-gray-400 border-2 cursor-pointer">
          <a href="#" className="p-4 flex-shrink-0">
            Learn More
          </a>

          <div className="items-stretch border-l-2 p-4">
            <RightArrow fillColour="#fff" />
          </div>
        </button>
      </div>
    </section>
  );
}
