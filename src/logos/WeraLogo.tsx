import React from 'react';

const WeraLogo = ({
  width,
  height = 50,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="21" height="21" fill="url(#pattern-wera)" />
      <defs>
        <pattern
          id="pattern-wera"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_338_53052" transform="scale(0.0142857)" />
        </pattern>
        <image
          id="image0_338_53052"
          width="70"
          height="70"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default WeraLogo;
