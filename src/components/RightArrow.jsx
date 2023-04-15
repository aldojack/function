import React from "react";

export default function RightArrow({fillColour}) {
  return (
    <svg
      width="7"
      height="13"
      viewBox="0 0 7 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.00246 0.265855C0.802456 0.065855 0.492456 0.065855 0.292456 0.265855C0.0924555 0.465855 0.0924556 0.775855 0.292456 0.975855L5.43746 6.12085L0.292456 11.2659C0.0924561 11.4659 0.0924562 11.7759 0.292456 11.9759C0.492456 12.1759 0.802456 12.1759 1.00246 11.9759L6.85746 6.12085L1.00246 0.265855Z"
        fill={fillColour}
      />
    </svg>
  );
}
