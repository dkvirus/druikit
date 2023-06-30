export function handleCssUnit(value) {
  if (typeof value === 'number') return value + 'px';
  if (typeof value === 'string') return value;
  return undefined;
}
export function isUndefined(value) {
  return typeof value === 'undefined';
}
export function isNotUndefined(value) {
  return !isUndefined(value);
}

/* *************************** style ******************************* */
export function getTextStyle(_ref) {
  var color = _ref.color,
    textAlign = _ref.textAlign,
    textDecoration = _ref.textDecoration,
    textTransform = _ref.textTransform,
    textIndent = _ref.textIndent;
  var sty = {};
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
export function getFontStyle(_ref2) {
  var fontFamily = _ref2.fontFamily,
    fontStyle = _ref2.fontStyle,
    fontSize = _ref2.fontSize,
    fontWeight = _ref2.fontWeight;
  var sty = {};
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
export function getMarginStyle(_ref3) {
  var margin = _ref3.margin,
    marginTop = _ref3.marginTop,
    marginBottom = _ref3.marginBottom,
    marginLeft = _ref3.marginLeft,
    marginRight = _ref3.marginRight;
  var sty = {};
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
export function getPaddingStyle(_ref4) {
  var padding = _ref4.padding,
    paddingTop = _ref4.paddingTop,
    paddingBottom = _ref4.paddingBottom,
    paddingLeft = _ref4.paddingLeft,
    paddingRight = _ref4.paddingRight;
  var sty = {};
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
export function getDimensionStyle(_ref5) {
  var height = _ref5.height,
    lineHeight = _ref5.lineHeight,
    maxHeight = _ref5.maxHeight,
    minHeight = _ref5.minHeight,
    width = _ref5.width,
    maxWidth = _ref5.maxWidth,
    minWidth = _ref5.minWidth;
  var sty = {};
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
export function getDisplayStyle(_ref6) {
  var display = _ref6.display;
  var sty = {};
  if (isNotUndefined(display)) {
    sty.display = display;
  }
  return sty;
}
export function getPositionStyle(_ref7) {
  var position = _ref7.position,
    top = _ref7.top,
    bottom = _ref7.bottom,
    left = _ref7.left,
    right = _ref7.right;
  var sty = {};
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
export function getFlexStyle(_ref8) {
  var flexDirection = _ref8.flexDirection,
    flexWrap = _ref8.flexWrap,
    justifyContent = _ref8.justifyContent,
    alignItems = _ref8.alignItems,
    alignContent = _ref8.alignContent,
    order = _ref8.order,
    flexGrow = _ref8.flexGrow,
    flexShrink = _ref8.flexShrink,
    flexBasis = _ref8.flexBasis,
    alignSelf = _ref8.alignSelf;
  var sty = {};
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
export function getBorderStyle(_ref9) {
  var border = _ref9.border,
    borderStyle = _ref9.borderStyle,
    borderWidth = _ref9.borderWidth,
    borderColor = _ref9.borderColor,
    borderRadius = _ref9.borderRadius,
    boxShadow = _ref9.boxShadow;
  var sty = {};
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
export function getBackgroundStyle(_ref10) {
  var background = _ref10.background,
    backgroundColor = _ref10.backgroundColor,
    backgroundImage = _ref10.backgroundImage,
    backgroundRepeat = _ref10.backgroundRepeat,
    backgroundAttachment = _ref10.backgroundAttachment,
    backgroundPosition = _ref10.backgroundPosition;
  var sty = {};
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
export function getRestStyle(_ref11) {
  var cursor = _ref11.cursor,
    overflow = _ref11.overflow,
    overflowX = _ref11.overflowX,
    overflowY = _ref11.overflowY;
  var sty = {};
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
export function getCustomStyle(_ref12) {
  var fullWidth = _ref12.fullWidth,
    halfWidth = _ref12.halfWidth,
    fullHeight = _ref12.fullHeight,
    halfHeight = _ref12.halfHeight,
    pointer = _ref12.pointer,
    ellipsis = _ref12.ellipsis;
  var sty = {};
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