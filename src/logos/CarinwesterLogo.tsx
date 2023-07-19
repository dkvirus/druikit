import React from 'react';

const CarinwesterLogo = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 69 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="69" height="13" fill="url(#pattern-carinwester)" />
      <defs>
        <pattern
          id="pattern-carinwester"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_338_52429"
            transform="translate(0 -0.0263827) scale(0.00275482 0.0146217)"
          />
        </pattern>
        <image
          id="image0_338_52429"
          width="363"
          height="72"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default CarinwesterLogo;
