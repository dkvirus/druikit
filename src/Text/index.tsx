import { Property } from 'csstype';
import React, { CSSProperties, FC } from 'react';
import {
  getColor,
  getFontSize,
  getFontWeight,
  getTextTransform,
} from './utils';

export interface TextProps {
  style?: CSSProperties;
  className?: string;
  children?: string;
  fontSize?: number;
  fontSize32?: boolean;
  fontSize16?: boolean;
  fontSize14?: boolean;
  fontSize12?: boolean;
  fontWeight?: Property.FontWeight;
  bold?: boolean;
  bolder?: boolean;
  color?: string;
  color333?: boolean;
  color666?: boolean;
  color999?: boolean;
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
  pointer?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const Text: FC<TextProps> = ({
  style,
  className,
  children,
  // fontSize
  fontSize,
  fontSize32,
  fontSize16,
  fontSize14,
  fontSize12,
  // fontWeight
  fontWeight,
  bold,
  bolder,
  // color
  color,
  color333,
  color666,
  color999,
  colorBlue,
  colorRed,
  // textTransform
  capitalize,
  uppercase,
  lowercase,
  // css
  pointer,
  ...props
}) => {
  const sty: CSSProperties = {
    ...getFontSize({
      fontSize,
      fontSize32,
      fontSize16,
      fontSize14,
      fontSize12,
    }),
    ...getFontWeight({
      fontWeight,
      bold,
      bolder,
    }),
    ...getColor({
      color,
      color333,
      color666,
      color999,
      colorBlue,
      colorRed,
    }),
    ...getTextTransform({
      capitalize,
      uppercase,
      lowercase,
    }),
  };

  if (pointer) {
    sty.cursor = 'pointer';
  }

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

export default Text;
