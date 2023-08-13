import React, { CSSProperties } from 'react';

const DownloadOutlined = ({
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
      className={className}
      style={style}
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 1024 1024"
      version="1.1"
    >
      <path d="M213.333333 853.333333h597.333334v-85.333333H213.333333m597.333334-384h-170.666667V128H384v256H213.333333l298.666667 298.666667 298.666667-298.666667z" />
    </svg>
  );
};

export default DownloadOutlined;
