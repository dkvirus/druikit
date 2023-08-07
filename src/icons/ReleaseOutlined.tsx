import React, { CSSProperties } from 'react';

const ReleaseOutlined = ({
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
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
    >
      <path
        d="M426.67008 256a34.24256 34.24256 0 0 1-34.14016-34.12992v-85.34016A34.24256 34.24256 0 0 1 426.67008 102.4h170.65984a34.24256 34.24256 0 0 1 34.14016 34.12992v85.34016A34.24256 34.24256 0 0 1 597.32992 256H426.67008z"
        fill={color}
      />
      <path
        d="M785.07008 170.67008h-102.4v68.25984C682.67008 276.46976 651.9296 307.2 614.4 307.2H409.6c-37.5296 0-68.27008-30.73024-68.27008-68.27008v-68.25984h-102.4c-37.5296 0-68.25984 30.73024-68.25984 68.25984v614.4c0 37.53984 30.73024 68.27008 68.25984 68.27008h546.14016c37.5296 0 68.25984-30.73024 68.25984-68.27008v-614.4c0-37.5296-30.73024-68.25984-68.25984-68.25984zM307.2 443.72992h204.8V512H307.2v-68.27008z m341.32992 341.34016H307.2V716.8h341.32992v68.27008zM716.8 648.52992H307.2v-68.25984h409.6v68.25984z"
        fill={color}
      />
    </svg>
  );
};

export default ReleaseOutlined;
