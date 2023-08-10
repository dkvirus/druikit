import React from 'react';

const SelectedVendorsLogo = ({
  width = 180,
  height,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 166 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <text
          transform="matrix(1,0,0,1,0,0)"
          fontWeight="bold"
          xmlSpace="preserve"
          textAnchor="start"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize="20"
          y="22"
          x="0"
          strokeWidth="0"
          stroke="#000"
          fill="#000000"
        >
          Selected vendors
        </text>
      </g>
    </svg>
  );
};

export default SelectedVendorsLogo;
