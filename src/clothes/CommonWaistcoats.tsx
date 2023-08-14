import React from 'react';

const CommonWaistcoats = ({ size = 12, ...props }: { size?: number }) => {
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
          strokeWidth="15"
          strokeMiterlimit="10"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#000"
          fill="none"
          d="m177.848586,3.668167s93.068826,171.143223 96.171081,301.953627l0,121.033458l-48.091374,113.690248l-220.261293,0l0,-187.045344s116.343324,-167.479785 38.805609,-311.74224l133.375977,-37.889749zm0,0"
        />
        <path
          strokeWidth="15"
          strokeMiterlimit="10"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#000"
          fill="none"
          d="m125.102079,222.493252l74.458794,0"
        />
        <path
          strokeWidth="15"
          strokeMiterlimit="10"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#000"
          fill="none"
          d="m370.190748,3.668167s-93.068826,171.143223 -96.171081,301.953627l0,121.033458l48.06804,113.690248l220.261293,0l0,-187.045344s-116.331657,-167.479785 -38.770608,-311.74224l-133.387644,-37.889749zm0,0"
        />
        <path
          strokeWidth="15"
          strokeMiterlimit="10"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#000"
          fill="none"
          d="m422.925588,222.493252l-74.447127,0"
        />
        <path
          strokeWidth="15"
          strokeMiterlimit="10"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#000"
          fill="none"
          d="m190.23894,3.668167s57.365472,37.90725 170.618208,0"
        />
      </g>
    </svg>
  );
};

export default CommonWaistcoats;
