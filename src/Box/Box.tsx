import React, { CSSProperties, type FC } from 'react';
import { BoxType } from './types';
import { handleCssUnit, isNotUndefined } from './utils';

export const Box: FC<BoxType> = ({
  // dom 元素通用属性
  style,
  className,
  // 子元素
  children,

  // css 属性
  backgroundColor,
  cursor,

  // css 属性 - 文本
  color,
  textAlign,
  textDecoration,
  textTransform,
  textIndent,
  // css 属性 - 字体
  fontFamily,
  fontStyle,
  fontSize,
  fontWeight,
  // css 属性 - 外边距
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  // css 属性 - 填充
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  // css 属性 - 尺寸
  height,
  lineHeight,
  maxHeight,
  minHeight,
  width,
  maxWidth,
  minWidth,

  // css 属性 - 显示
  display,

  // css 属性 - 定位
  position,
  top,
  bottom,
  left,
  right,

  // css 属性 - 边框
  border,
  borderRadius,
  boxShadow,

  // css 属性 - flex 布局
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  order,
  flexGrow,
  flexShrink,
  flexBasis,
  alignSelf,

  fullWidth,
  fullHeight,
  halfWidth,
  halfHeight,
  pointer,

  // 自定义便捷属性
  ...props
}) => {
  const sty: CSSProperties = {};

  if (isNotUndefined(backgroundColor)) {
    sty.backgroundColor = backgroundColor;
  }

  if (isNotUndefined(cursor)) {
    sty.cursor = cursor;
  }

  /* ******************************* 文本 ************************************* */
  if (isNotUndefined(color)) {
    sty.color = color;
  }

  if (isNotUndefined(textAlign)) {
    sty.textAlign = textAlign;
  }

  if (isNotUndefined(textDecoration)) {
    sty.textDecoration = textDecoration;
  }

  if (isNotUndefined(textTransform)) {
    sty.textTransform = textTransform;
  }

  if (isNotUndefined(textIndent)) {
    sty.textIndent = handleCssUnit(textIndent);
  }

  /* ******************************* 字体 ************************************* */
  if (isNotUndefined(fontFamily)) {
    sty.fontFamily = fontFamily;
  }

  if (isNotUndefined(fontStyle)) {
    sty.fontStyle = fontStyle;
  }

  if (isNotUndefined(fontSize)) {
    sty.fontSize = handleCssUnit(fontSize);
  }

  if (isNotUndefined(fontWeight)) {
    sty.fontWeight = fontWeight;
  }

  /* ******************************* 外边距 ************************************* */
  if (isNotUndefined(margin)) {
    sty.margin = handleCssUnit(margin);
  }

  if (isNotUndefined(marginTop)) {
    sty.marginTop = handleCssUnit(marginTop);
  }

  if (isNotUndefined(marginBottom)) {
    sty.marginBottom = handleCssUnit(marginBottom);
  }

  if (isNotUndefined(marginLeft)) {
    sty.marginLeft = handleCssUnit(marginLeft);
  }

  if (isNotUndefined(marginRight)) {
    sty.marginRight = handleCssUnit(marginRight);
  }

  /* ******************************* 内边距 ************************************* */
  if (isNotUndefined(padding)) {
    sty.padding = handleCssUnit(padding);
  }

  if (isNotUndefined(paddingTop)) {
    sty.paddingTop = handleCssUnit(paddingTop);
  }

  if (isNotUndefined(paddingBottom)) {
    sty.paddingBottom = handleCssUnit(paddingBottom);
  }

  if (isNotUndefined(paddingLeft)) {
    sty.paddingLeft = handleCssUnit(paddingLeft);
  }

  if (isNotUndefined(paddingRight)) {
    sty.paddingRight = handleCssUnit(paddingRight);
  }

  /* ******************************* 尺寸 ************************************* */
  if (isNotUndefined(height)) {
    sty.height = handleCssUnit(height);
  }

  if (isNotUndefined(lineHeight)) {
    sty.lineHeight = handleCssUnit(lineHeight);
  }

  if (isNotUndefined(maxHeight)) {
    sty.maxHeight = handleCssUnit(maxHeight);
  }

  if (isNotUndefined(minHeight)) {
    sty.minHeight = handleCssUnit(minHeight);
  }

  if (isNotUndefined(width)) {
    sty.width = handleCssUnit(width);
  }

  if (isNotUndefined(maxWidth)) {
    sty.maxWidth = handleCssUnit(maxWidth);
  }

  if (isNotUndefined(minWidth)) {
    sty.minWidth = handleCssUnit(minWidth);
  }

  /* ******************************* 显示 ************************************* */
  if (isNotUndefined(display)) {
    sty.display = display;
  }

  /* ******************************* 定位 ************************************* */
  if (isNotUndefined(position)) {
    sty.position = position;
  }

  if (isNotUndefined(top)) {
    sty.top = handleCssUnit(top);
  }

  if (isNotUndefined(bottom)) {
    sty.bottom = handleCssUnit(bottom);
  }

  if (isNotUndefined(left)) {
    sty.left = handleCssUnit(left);
  }

  if (isNotUndefined(right)) {
    sty.right = handleCssUnit(right);
  }

  /* ******************************* 边框 ************************************* */
  if (isNotUndefined(border)) {
    sty.border = border;
  }

  if (isNotUndefined(borderRadius)) {
    sty.borderRadius = handleCssUnit(borderRadius);
  }

  if (isNotUndefined(boxShadow)) {
    sty.boxShadow = boxShadow;
  }

  /* ******************************* Flex 布局 ************************************* */
  if (isNotUndefined(flexDirection)) {
    sty.flexDirection = flexDirection;
  }

  if (isNotUndefined(flexWrap)) {
    sty.flexWrap = flexWrap;
  }

  if (isNotUndefined(justifyContent)) {
    sty.justifyContent = justifyContent;
  }

  if (isNotUndefined(alignItems)) {
    sty.alignItems = alignItems;
  }

  if (isNotUndefined(alignContent)) {
    sty.alignContent = alignContent;
  }

  if (isNotUndefined(order)) {
    sty.order = order;
  }

  if (isNotUndefined(flexGrow)) {
    sty.flexGrow = flexGrow;
  }

  if (isNotUndefined(flexShrink)) {
    sty.flexShrink = flexShrink;
  }

  if (isNotUndefined(flexBasis)) {
    sty.flexBasis = handleCssUnit(flexBasis);
  }

  if (isNotUndefined(alignSelf)) {
    sty.alignSelf = alignSelf;
  }

  /* ******************************* 自定义属性 ************************************* */
  if (fullWidth) {
    sty.width = '100%';
  }

  if (halfWidth) {
    sty.width = '50%';
  }

  if (fullHeight) {
    sty.height = '100%';
  }

  if (halfHeight) {
    sty.height = '50%';
  }

  if (pointer) {
    sty.cursor = 'pointer';
  }

  return (
    <div style={{ ...sty, ...style }} className={className} {...props}>
      {children}
    </div>
  );
};
