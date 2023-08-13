import React, { CSSProperties } from 'react';

const PlusOutlined = ({
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
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  );
};

export default PlusOutlined;
