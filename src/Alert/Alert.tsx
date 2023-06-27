import React, { CSSProperties } from 'react';

export interface AlertProps {
  style?: CSSProperties;
  className?: string;
  message?: string;
  type?: 'red' | 'green' | 'blue' | 'yellow';
}

export const Alert = ({
  style,
  className,
  message,
  type = 'red',
}: AlertProps) => {
  const sty: CSSProperties = {
    padding: '5px 15px',
    fontSize: 14,
    display: 'inline-block',
  };

  if (type === 'red') {
    sty.backgroundColor = '#fce8e7';
    sty.color = '#d62310';
  } else if (type === 'green') {
    sty.backgroundColor = '#d4edda';
    sty.color = '#155724';
  } else if (type === 'yellow') {
    sty.backgroundColor = '#fffbe6';
    sty.color = '#ffe58f';
  } else {
    sty.backgroundColor = '#e6f4ff';
    sty.color = '#91caff';
  }

  return (
    <div style={{ ...sty, ...style }} className={className}>
      {message}
    </div>
  );
};
