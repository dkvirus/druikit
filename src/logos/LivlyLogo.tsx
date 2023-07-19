import React from 'react';

const LivlyLogo = ({ width, height }: { width?: number; height?: number }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 56 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="56" height="13" fill="url(#pattern-livly)" />
      <defs>
        <pattern
          id="pattern-livly"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_338_52642"
            transform="translate(-0.0649351 -0.235028) scale(0.00405268 0.0173365)"
          />
        </pattern>
        <image
          id="image0_338_52642"
          width="282"
          height="88"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default LivlyLogo;
