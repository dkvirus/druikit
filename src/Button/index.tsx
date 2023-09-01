import { LoadingOutlined } from 'druikit';
import React, { CSSProperties, FC, ReactNode } from 'react';

export interface ButtonProps {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'danger' | 'primary' | 'default';
  danger?: boolean;
  primary?: boolean;
  bordered?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  shape?: 'round' | 'square';
  fullWidth?: boolean;
  left?: number;
  right?: number;
  gap?: number;
}

const Button: FC<ButtonProps> = ({
  style,
  className,
  children,
  onClick,
  disabled,
  loading,
  type = 'default',
  danger,
  primary,
  bordered = true,
  prefix,
  suffix,
  shape = 'round',
  fullWidth,
  left,
  right,
  gap = 10,
}) => {
  const sty: CSSProperties = {
    padding: '0 20px',
    height: 36,
    textAlign: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    cursor: typeof onClick === 'function' ? 'pointer' : 'auto',
    boxSizing: 'border-box',
  };

  /* *************************** left, right ***************************** */
  if (typeof left !== 'undefined') {
    sty.marginLeft = left;
  }

  if (typeof right !== 'undefined') {
    sty.marginRight = right;
  }

  /* *************************** type, danger, primary ***************************** */
  if (type === 'default') {
    sty.color = '#666';
    sty.border = '1px solid #a0a0a0';
  }

  if (type === 'danger' || danger) {
    sty.backgroundColor = '#ec7765';
    sty.color = '#ffffff';
    sty.border = '1px solid #ec7765';
  }

  if (type === 'primary' || primary) {
    sty.backgroundColor = '#01a699';
    sty.color = '#fff';
    sty.border = '1px solid #01a699';
  }

  /* *************************** bordered ***************************** */
  if (!bordered) {
    sty.border = 'none';
  }

  /* *************************** fullWidth ***************************** */
  if (fullWidth) {
    sty.width = '100%';
  }

  /* *************************** disabled ***************************** */
  if (disabled) {
    sty.opacity = 0.5;
    sty.cursor = 'not-allowed';
  }

  if (disabled && bordered) {
    sty.border = '1px solid #d9d9d9';
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

export default Button;
