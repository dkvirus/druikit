import React, { CSSProperties, ReactNode } from 'react';

export interface ButtonProps {
  style?: CSSProperties;
  className?: string;
  left?: number;
  right?: number;
  children?: ReactNode;
  onClick?: () => void;
  type?: 'red' | 'default';
  prefix?: ReactNode;
  suffix?: ReactNode;
  shape?: 'round' | 'square';
}

export const Button = ({
  style,
  className,
  children,
  onClick,
  type = 'red',
  prefix,
  suffix,
  shape = 'round',
  left,
  right,
}: ButtonProps) => {
  const sty: CSSProperties = {
    padding: '0 20px',
    height: 36,
    textAlign: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    cursor: 'pointer',
  };

  if (typeof left !== 'undefined') {
    sty.marginLeft = left;
  }

  if (typeof right !== 'undefined') {
    sty.marginRight = right;
  }

  if (type === 'red') {
    sty.backgroundColor = '#ec7765';
    sty.color = '#ffffff';
  } else {
    sty.color = '#666';
    sty.border = '1px solid #a0a0a0';
  }

  if (shape === 'round') {
    sty.borderRadius = 18;
  } else {
    sty.borderRadius = 4;
  }

  return (
    <div style={{ ...sty, ...style }} className={className} onClick={onClick}>
      {prefix}
      {children}
      {suffix}
    </div>
  );
};
