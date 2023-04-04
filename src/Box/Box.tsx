import React, { CSSProperties, ReactNode, type FC } from 'react';
import { handleCssUnit, isNotUndefined } from './utils';

export const Box: FC<{
  /**
   * @description 内联样式
   * @default {}
   */
  style?: CSSProperties;
  /**
   * @description 类名
   * @default ''
   */
  className?: string;
  /**
   * @description 盒子子元素
   */
  children?: ReactNode;
  /**
   * @description css - 宽度
   */
  width?: number | string;
  /**
   * @description css - 高度
   */
  height?: number | string;
  /**
   * @description css - 背景颜色
   */
  backgroundColor?: string;
}> = ({
  // dom 元素通用属性
  style,
  className,
  // 子元素
  children,
  // css 属性
  width,
  height,
  backgroundColor,
  // 自定义便捷属性
}) => {
  const sty: CSSProperties = {};

  if (isNotUndefined(width)) {
    sty.width = handleCssUnit(width);
  }

  if (isNotUndefined(height)) {
    sty.height = handleCssUnit(height);
  }

  if (isNotUndefined(backgroundColor)) {
    sty.backgroundColor = backgroundColor;
  }

  return (
    <div style={{ ...sty, ...style }} className={className}>
      {children}
    </div>
  );
};
