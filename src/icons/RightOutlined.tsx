import React, { CSSProperties } from 'react';

const RightOutlined = ({
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
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" />
    </svg>
  );
};

export default RightOutlined;
