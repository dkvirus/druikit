import React, { CSSProperties } from 'react';

export interface SwitchProps {
  style?: CSSProperties;
  className?: string;
}

export const Switch = ({ style, className }: SwitchProps) => {
  return (
    <div style={style} className={className}>
      fa
    </div>
  );
};
