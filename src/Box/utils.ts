import { CSSProperties } from 'react';

export function handleCssUnit(value?: number | string) {
  if (typeof value === 'number') return value + 'px';
  if (typeof value === 'string') return value;
  return undefined;
}

export function isUndefined(value: any) {
  return typeof value === 'undefined';
}

export function isNotUndefined(value: any) {
  return !isUndefined(value);
}

/* *************************** style ******************************* */
export function getTextStyle({
  color,
  textAlign,
  textDecoration,
  textTransform,
  textIndent,
}: any) {
  const sty: CSSProperties = {};

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

  return sty;
}

export function getFontStyle({
  fontFamily,
  fontStyle,
  fontSize,
  fontWeight,
}: any) {
  const sty: CSSProperties = {};

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

  return sty;
}

export function getMarginStyle({
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: any) {
  const sty: CSSProperties = {};

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

  return sty;
}

export function getPaddingStyle({
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}: any) {
  const sty: CSSProperties = {};

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

  return sty;
}

export function getDimensionStyle({
  height,
  lineHeight,
  maxHeight,
  minHeight,
  width,
  maxWidth,
  minWidth,
}: any) {
  const sty: CSSProperties = {};

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

  return sty;
}

export function getDisplayStyle({ display }: any) {
  const sty: CSSProperties = {};

  if (isNotUndefined(display)) {
    sty.display = display;
  }

  return sty;
}

export function getPositionStyle({ position, top, bottom, left, right }: any) {
  const sty: CSSProperties = {};

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

  return sty;
}

export function getFlexStyle({
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
}: any) {
  const sty: CSSProperties = {};

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

  return sty;
}

export function getBorderStyle({
  border,
  borderStyle,
  borderWidth,
  borderColor,
  borderRadius,
  boxShadow,
}: any) {
  const sty: CSSProperties = {};

  if (isNotUndefined(border)) {
    sty.border = border;
  }

  if (isNotUndefined(borderStyle)) {
    sty.borderStyle = borderStyle;
  }

  if (isNotUndefined(borderWidth)) {
    sty.borderWidth = handleCssUnit(borderWidth);
  }

  if (isNotUndefined(borderColor)) {
    sty.borderColor = borderColor;
  }

  if (isNotUndefined(borderRadius)) {
    sty.borderRadius = handleCssUnit(borderRadius);
  }

  if (isNotUndefined(boxShadow)) {
    sty.boxShadow = boxShadow;
  }

  return sty;
}

export function getBackgroundStyle({
  background,
  backgroundColor,
  backgroundImage,
  backgroundRepeat,
  backgroundAttachment,
  backgroundPosition,
}: any) {
  const sty: CSSProperties = {};

  if (isNotUndefined(background)) {
    sty.background = background;
  }

  if (isNotUndefined(backgroundColor)) {
    sty.backgroundColor = backgroundColor;
  }

  if (isNotUndefined(backgroundImage)) {
    sty.backgroundImage = backgroundImage;
  }

  if (isNotUndefined(backgroundRepeat)) {
    sty.backgroundRepeat = backgroundRepeat;
  }

  if (isNotUndefined(backgroundAttachment)) {
    sty.backgroundAttachment = backgroundAttachment;
  }

  if (isNotUndefined(backgroundPosition)) {
    sty.backgroundPosition = backgroundPosition;
  }

  return sty;
}

export function getRestStyle({ cursor, overflow, overflowX, overflowY }: any) {
  const sty: CSSProperties = {};

  if (isNotUndefined(cursor)) {
    sty.cursor = cursor;
  }

  if (isNotUndefined(overflow)) {
    sty.overflow = overflow;
  }

  if (isNotUndefined(overflowX)) {
    sty.overflowX = overflowX;
  }

  if (isNotUndefined(overflowY)) {
    sty.overflowY = overflowY;
  }

  return sty;
}

export function getCustomStyle({
  fullWidth,
  halfWidth,
  fullHeight,
  halfHeight,
  pointer,
  ellipsis,
}: any) {
  const sty: CSSProperties = {};

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

  if (ellipsis) {
    sty.whiteSpace = 'nowrap';
    sty.overflow = 'hidden';
    sty.textOverflow = 'ellipsis';
  }

  return sty;
}
