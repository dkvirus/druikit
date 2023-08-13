import React from 'react';

const UnlockFilled = ({
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
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M512 92c-132 0-240 108-240 240l0 0 120 0c0-66 54-120 120-120s120 54 120 120l0 120 120 0 0-120c0-132-108-240-240-240zM752 452l-480 0c-30 0-60 30-60 60l0 360c0 30 30 60 60 60l480 0c30 0 60-30 60-60l0-360c0-30-30-60-60-60zM512 752c-36 0-60-24-60-60s24-60 60-60 60 24 60 60c0 36-24 60-60 60z" />
    </svg>
  );
};

export default UnlockFilled;
