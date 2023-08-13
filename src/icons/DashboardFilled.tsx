import React, { CSSProperties } from 'react';

const DashboardFilled = ({
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
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
    </svg>
  );
};

export default DashboardFilled;
