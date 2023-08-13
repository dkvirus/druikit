import React, { CSSProperties } from 'react';

const DoubleRightOutlined = ({
  style,
  className,
  size = 12,
  color = '#666',
}: {
  style?: CSSProperties;
  className?: string;
  size?: number;
  color?: string;
}) => {
  return (
    <svg
      style={style}
      className={className}
      width={size}
      height={size}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <g>
          <polygon points="15.5,5 11,5 16,12 11,19 15.5,19 20.5,12" />
          <polygon points="8.5,5 4,5 9,12 4,19 8.5,19 13.5,12" />
        </g>
      </g>
    </svg>
  );
};

export default DoubleRightOutlined;
