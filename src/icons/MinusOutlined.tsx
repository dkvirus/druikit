import React from 'react';

const MinusOutlined = ({
  size = 12,
  color = '#666',
  ...props
}: {
  size?: number;
  color?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19 13H5v-2h14v2z" />
    </svg>
  );
};

export default MinusOutlined;
