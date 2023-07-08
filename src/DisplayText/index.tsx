import React, { CSSProperties, FC, ReactNode } from 'react';
import {
  ArrowDownOutlined,
  ArrowRightOutlined,
  ArrowUpOutlined,
} from '../icons';

export interface DisplayTextProps {
  style?: CSSProperties;
  className?: string;
  value: any;
  fontSize?: number;
  /**
   * @description 是否显示上下箭头
   */
  showArrow?: boolean;
  /**
   * @description 非数值时显示文本
   */
  nan?: string;
  /**
   * @description 零的颜色
   */
  zeroColor?: string;
  /**
   * @description 负数颜色
   */
  negativeColor?: string;
  /**
   * @description 正数颜色
   */
  positiveColor?: string;
}

const DisplayText: FC<DisplayTextProps> = ({
  style,
  className,
  value,
  fontSize = 12,
  showArrow = true,
  nan = 'N/A',
  zeroColor = '#484848',
  negativeColor = '#E22F21', // 负数的颜色
  positiveColor = '#01A699',
}) => {
  const newValue = String(value)
    .replace(/,/g, '') // '12,345' -> '12345'
    .replace(/%/g, '') // '12%' -> '12'
    .trim(); // 去除前后空格 '12 %' -> '12'

  let color = zeroColor;
  const sty: CSSProperties = {
    color,
    ...style,
  };
  if (typeof fontSize !== 'undefined') {
    sty.fontSize = fontSize;
  }

  // 非数值直接返回
  if (String(Number(newValue)) === 'NaN') {
    return (
      <div style={sty} className={className}>
        {nan}
      </div>
    );
  }

  const numValue = Number(newValue);

  /* ************************** color ****************************** */
  if (numValue < 0) {
    color = negativeColor;
  } else if (numValue > 0) {
    color = positiveColor;
  }
  sty.color = color;

  /* ************************** symbol ****************************** */
  const symbol = numValue >= 0 ? '+' : '-';

  /* ************************** arrow ****************************** */
  let arrowEl: ReactNode = null;
  if (showArrow) {
    if (numValue < 0) {
      arrowEl = <ArrowDownOutlined color={color} size={fontSize} />;
    } else if (numValue === 0) {
      arrowEl = <ArrowRightOutlined color={color} size={fontSize} />;
    } else {
      arrowEl = <ArrowUpOutlined color={color} size={fontSize} />;
    }
  }

  /* ************************** style ****************************** */
  sty.display = 'flex';
  sty.alignItems = 'center';

  return (
    <div style={sty} className={className}>
      {arrowEl}
      {symbol + String(value).replace(/-/g, '').replace(/\+/g, '')}
    </div>
  );
};

export default DisplayText;
