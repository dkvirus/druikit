import React, { CSSProperties } from 'react';

const CheckOutlined = ({
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
      viewBox="0 0 448.8 448.8"
      width={size}
      height={size}
      fill={color}
    >
      <g id="check">
        <polygon points="142.8,323.85 35.7,216.75 0,252.45 142.8,395.25 448.8,89.25 413.1,53.55" />
      </g>
    </svg>
  );
};

export default CheckOutlined;
