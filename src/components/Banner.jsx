import React from "react";
import RightArrow from '../assets/right-arrow.svg'

export default function Banner() {
  return (
    <section className="w-full flex justify-center items-center bg-[#19291C] text-white">
      <div className="text-center px-6 py-12 flex flex-col items-center">
        <h3 className=" text-xl">Get your gifts in time for the holidays</h3>
        <p className=" opacity-50 text-sm">
          Free, extended returns until January
        </p>
        <div
          className="flex mt-6 items-center justify-center min-w-fit border-gray-400 border-2 cursor-pointer"
        >
          <div className="p-4 flex-shrink-0">
            <p>Learn More</p>
          </div>
          <div className="items-stretch border-l-2 p-4">
            <img src={RightArrow} className="fill-black" />
          </div>
        </div>
      </div>
    </section>
  );
}
