import React from 'react';

const SolidSquareOutlined = ({
  size = 12,
  color = '#666',
  onClick,
  ...props
}: {
  size?: number;
  color?: string;
  onClick?: () => void;
}) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      onClick={onClick}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M864 128H160c-17.6 0-32 14.4-32 32v704c0 17.6 14.4 32 32 32h704c17.6 0 32-14.4 32-32V160c0-17.6-14.4-32-32-32zM428 718.4l-45.6 45.6-45.6-45.6-116-117.6 45.6-45.6L383.2 672l367.2-367.2 45.6 45.6-368 368z" />
    </svg>
  );
};

export default SolidSquareOutlined;
