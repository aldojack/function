import React from "react";
import Doorway from "./Doorway";
// import doorway1 from '../assets/doorway-1.png';
// import doorway2 from '../assets/doorway-2.png';

import doorway1 from '/images/doorway-1.webp';
import doorway2 from '/images/doorway-2.webp';

export default function DoorwayContainer() {
  const doorwayData = [
    {
      id: 1,
      img: doorway1,
      title: "The Casual Edit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
        id: 2,
        img: doorway2,
        title: "The Denim Edit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    }
  ];

  const doorwayList = doorwayData.map(item => (
    <Doorway key={item.id} {...item}/>
  ))
  return (
    <section className="w-full my-16 flex flex-col md:flex-row justify-center items-center">
        {doorwayList}
    </section>
  );
}
