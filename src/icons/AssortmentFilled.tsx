import React from 'react';

const AssortmentFilled = ({
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
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2l-5.5 9h11z" />
      <circle cx="17.5" cy="17.5" r="4.5" />
      <path d="M3 13.5h8v8H3z" />
    </svg>
  );
};

export default AssortmentFilled;
