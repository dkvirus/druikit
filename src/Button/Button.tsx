import { LoadingOutlined } from 'druikit';
import React, { CSSProperties, ReactNode } from 'react';

export interface ButtonProps {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'danger' | 'default';
  danger?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  shape?: 'round' | 'square';
  left?: number;
  right?: number;
  gap?: number;
}

export const Button = ({
  style,
  className,
  children,
  onClick,
  disabled,
  loading,
  type = 'default',
  danger,
  prefix,
  suffix,
  shape = 'round',
  left,
  right,
  gap = 10,
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

  /* *************************** left, right ***************************** */
  if (typeof left !== 'undefined') {
    sty.marginLeft = left;
  }

  if (typeof right !== 'undefined') {
    sty.marginRight = right;
  }

  /* *************************** type, danger ***************************** */
  if (type === 'default') {
    sty.color = '#666';
    sty.border = '1px solid #a0a0a0';
  }

  if (type === 'danger' || danger) {
    sty.backgroundColor = '#ec7765';
    sty.color = '#ffffff';
    sty.border = '1px solid #ec7765';
  }

  /* *************************** disabled ***************************** */
  if (disabled) {
    sty.backgroundColor = 'rgba(0,0,0,.04)';
    sty.color = 'rgba(0,0,0,.25)';
    sty.borderColor = '#d9d9d9';
    sty.cursor = 'not-allowed';
  }

  /* *************************** loading ***************************** */
  if (loading) {
    sty.opacity = 0.65;
  }

  /* *************************** shape ***************************** */
  if (shape === 'round') {
    sty.borderRadius = 18;
  } else {
    sty.borderRadius = 4;
  }

  /* *************************** gap ***************************** */
  const gapEl = <div style={{ width: gap }} />;

  return (
    <div
      style={{ ...sty, ...style }}
      className={className}
      onClick={() => {
        if (disabled) return;
        onClick?.();
      }}
    >
      {loading ? <LoadingOutlined size={20} /> : null}
      {prefix}
      {prefix || loading ? gapEl : null}
      {children}
      {suffix ? gapEl : null}
      {suffix}
    </div>
  );
};
