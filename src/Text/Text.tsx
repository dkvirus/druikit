import React, { CSSProperties } from 'react';
import { getColor, getFontSize, getTextTransform } from './utils';

export interface TextProps {
  style?: CSSProperties;
  className?: string;
  fontSize?: number;
  fontSize32?: boolean;
  fontSize16?: boolean;
  fontSize14?: boolean;
  fontSize12?: boolean;
  color?: string;
  /**
   * @default #666666
   */
  color666?: boolean;
  /**
   * @description 蓝色字体
   * @default #01a699
   */
  colorBlue?: boolean;
  /**
   * @description 红色字体
   * @default #d62310
   */
  colorRed?: boolean;
  capitalize?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
  children?: string;
}

export const Text = ({
  style,
  className,
  // fontSize
  fontSize,
  fontSize32,
  fontSize16,
  fontSize14,
  fontSize12,
  // color
  color,
  color666,
  colorBlue,
  colorRed,
  // fontWeigth

  // textTransform
  capitalize,
  uppercase,
  lowercase,
  children,
  ...props
}: TextProps) => {
  const sty: CSSProperties = {
    ...getFontSize({
      fontSize,
      fontSize32,
      fontSize16,
      fontSize14,
      fontSize12,
    }),
    ...getColor({
      color,
      color666,
      colorBlue,
      colorRed,
    }),
    ...getTextTransform({
      capitalize,
      uppercase,
      lowercase,
    }),
  };

  return (
    <div
      {...props}
      className={className}
      style={{
        ...sty,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
