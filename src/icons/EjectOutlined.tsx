import React, { CSSProperties } from 'react';

const EjectOutlined = ({
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
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 24V0h24v24H0z" />
      <path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" />
    </svg>
  );
};

export default EjectOutlined;
