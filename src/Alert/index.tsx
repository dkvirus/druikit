import React, { CSSProperties, FC } from 'react';

export interface AlertProps {
  style?: CSSProperties;
  className?: string;
  message?: string;
  type?: 'error' | 'success' | 'warning' | 'info';
  error?: boolean;
  success?: boolean;
  warning?: boolean;
  info?: boolean;
}

const Alert: FC<AlertProps> = ({
  style,
  className,
  message,
  type = 'error',
  error,
  success,
  warning,
  info,
}) => {
  const sty: CSSProperties = {
    padding: '5px 15px',
    fontSize: 14,
    display: 'inline-block',
  };

  if (type === 'error' || error) {
    sty.backgroundColor = '#fce8e7';
    sty.color = '#d62310';
  }
  if (type === 'success' || success) {
    sty.backgroundColor = '#d4edda';
    sty.color = '#155724';
  }
  if (type === 'warning' || warning) {
    sty.backgroundColor = '#ffeeba';
    sty.color = '#856404';
  }
  if (type === 'info' || info) {
    sty.backgroundColor = '#e6f4ff';
    sty.color = '#91caff';
  }

  return (
    <div style={{ ...sty, ...style }} className={className}>
      {message}
    </div>
  );
};

export default Alert;
