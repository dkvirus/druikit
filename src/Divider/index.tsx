import React, { CSSProperties, FC } from 'react';

export interface DividerProps {
  style?: CSSProperties;
  className?: string;
  type?: 'vertical' | 'horizontal';
  vertical?: boolean;
  horizontal?: boolean;
  color?: string;
  thickness?: number;
  length?: number | string;
  fullLength?: boolean;
  gap?: number;
}

const Divider: FC<DividerProps> = ({
  style,
  className,
  type = 'horizontal',
  vertical,
  horizontal,
  color = 'rgba(0, 0, 0, 0.1)',
  thickness = 1, // 厚度
  length = 30, // 长度
  fullLength = false,
  gap = 8,
}: DividerProps) => {
  const sty: CSSProperties = {
    backgroundColor: color,
    ...style,
  };

  const len = fullLength ? '100%' : length;

  if (type === 'horizontal' || horizontal) {
    sty.width = len;
    sty.height = thickness;
    sty.marginTop = gap;
    sty.marginBottom = gap;
  }

  if (type === 'vertical' || vertical) {
    sty.width = thickness;
    sty.height = len;
    sty.marginLeft = gap;
    sty.marginRight = gap;
  }

  return <div style={{ ...sty }} className={className} />;
};

export default Divider;
