import React from 'react';

const MarimekkoSkirts = ({ size = 12, ...props }: { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 550 550"
      {...props}
    >
      <g>
        <path
          strokeWidth="12"
          strokeMiterlimit="10"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#000"
          fill="none"
          d="m463.13007,177.436879l-2.08991,-170.769879l-374.055687,0l-2.08991,170.769879l-79.228264,338.22633s53.681034,62.29128 113.729916,0c0,0 21.71112,-30.391368 43.446741,0c21.722787,30.379701 86.896983,31.899911 97.116108,-3.035287l14.047068,-7.605717l14.058735,7.605717c10.230792,34.930998 75.393321,33.415455 97.116108,3.035287c21.71112,-30.391368 43.446741,0 43.446741,0c60.048882,62.29128 113.718249,0 113.718249,0l-79.215897,-338.22633zm0,0"
        />
        <path
          strokeWidth="12"
          strokeMiterlimit="10"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#000"
          fill="none"
          d="m142.52091,494.790946l27.325281,-317.855748"
        />
        <path
          strokeWidth="12"
          strokeMiterlimit="10"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#000"
          fill="none"
          d="m405.506757,494.790946l-27.313614,-317.855748"
        />
        <path
          strokeWidth="12"
          strokeMiterlimit="10"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#000"
          fill="none"
          d="m274.008,500.577778l0,-323.64258"
        />
        <path
          strokeWidth="12"
          strokeMiterlimit="10"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#000"
          fill="none"
          d="m88.607703,176.935198l370.812261,0"
        />
      </g>
    </svg>
  );
};

export default MarimekkoSkirts;
