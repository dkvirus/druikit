import React, { CSSProperties } from 'react';

const CaretLeftOutlined = ({
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
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z"></path>
    </svg>
  );
};

export default CaretLeftOutlined;
