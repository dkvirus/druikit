function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["style", "className", "children", "color", "textAlign", "textDecoration", "textTransform", "textIndent", "fontFamily", "fontStyle", "fontSize", "fontWeight", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight", "padding", "paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "height", "lineHeight", "maxHeight", "minHeight", "width", "maxWidth", "minWidth", "display", "position", "top", "bottom", "left", "right", "border", "borderStyle", "borderWidth", "borderColor", "borderRadius", "boxShadow", "flexDirection", "flexWrap", "justifyContent", "alignItems", "alignContent", "order", "flexGrow", "flexShrink", "flexBasis", "alignSelf", "background", "backgroundColor", "backgroundImage", "backgroundRepeat", "backgroundAttachment", "backgroundPosition", "cursor", "overflow", "overflowX", "overflowY", "fullWidth", "fullHeight", "halfWidth", "halfHeight", "pointer", "ellipsis", "onClick", "onDrag", "onDrop", "onFocus", "onBlur", "onKeyDown", "onKeyUp", "onMouseEnter", "onMouseLeave", "onMouseOver", "onMouseOut", "onMouseMove", "onMouseDown", "onMouseUp", "onScroll"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import { getBackgroundStyle, getBorderStyle, getCustomStyle, getDimensionStyle, getDisplayStyle, getFlexStyle, getFontStyle, getMarginStyle, getPaddingStyle, getPositionStyle, getRestStyle, getTextStyle } from "./utils";
export var Box = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var style = _ref.style,
    className = _ref.className,
    children = _ref.children,
    color = _ref.color,
    textAlign = _ref.textAlign,
    textDecoration = _ref.textDecoration,
    textTransform = _ref.textTransform,
    textIndent = _ref.textIndent,
    fontFamily = _ref.fontFamily,
    fontStyle = _ref.fontStyle,
    fontSize = _ref.fontSize,
    fontWeight = _ref.fontWeight,
    margin = _ref.margin,
    marginTop = _ref.marginTop,
    marginBottom = _ref.marginBottom,
    marginLeft = _ref.marginLeft,
    marginRight = _ref.marginRight,
    padding = _ref.padding,
    paddingTop = _ref.paddingTop,
    paddingBottom = _ref.paddingBottom,
    paddingLeft = _ref.paddingLeft,
    paddingRight = _ref.paddingRight,
    height = _ref.height,
    lineHeight = _ref.lineHeight,
    maxHeight = _ref.maxHeight,
    minHeight = _ref.minHeight,
    width = _ref.width,
    maxWidth = _ref.maxWidth,
    minWidth = _ref.minWidth,
    display = _ref.display,
    position = _ref.position,
    top = _ref.top,
    bottom = _ref.bottom,
    left = _ref.left,
    right = _ref.right,
    border = _ref.border,
    borderStyle = _ref.borderStyle,
    borderWidth = _ref.borderWidth,
    borderColor = _ref.borderColor,
    borderRadius = _ref.borderRadius,
    boxShadow = _ref.boxShadow,
    flexDirection = _ref.flexDirection,
    flexWrap = _ref.flexWrap,
    justifyContent = _ref.justifyContent,
    alignItems = _ref.alignItems,
    alignContent = _ref.alignContent,
    order = _ref.order,
    flexGrow = _ref.flexGrow,
    flexShrink = _ref.flexShrink,
    flexBasis = _ref.flexBasis,
    alignSelf = _ref.alignSelf,
    background = _ref.background,
    backgroundColor = _ref.backgroundColor,
    backgroundImage = _ref.backgroundImage,
    backgroundRepeat = _ref.backgroundRepeat,
    backgroundAttachment = _ref.backgroundAttachment,
    backgroundPosition = _ref.backgroundPosition,
    cursor = _ref.cursor,
    overflow = _ref.overflow,
    overflowX = _ref.overflowX,
    overflowY = _ref.overflowY,
    fullWidth = _ref.fullWidth,
    fullHeight = _ref.fullHeight,
    halfWidth = _ref.halfWidth,
    halfHeight = _ref.halfHeight,
    pointer = _ref.pointer,
    ellipsis = _ref.ellipsis,
    onClick = _ref.onClick,
    onDrag = _ref.onDrag,
    onDrop = _ref.onDrop,
    onFocus = _ref.onFocus,
    onBlur = _ref.onBlur,
    onKeyDown = _ref.onKeyDown,
    onKeyUp = _ref.onKeyUp,
    onMouseEnter = _ref.onMouseEnter,
    onMouseLeave = _ref.onMouseLeave,
    onMouseOver = _ref.onMouseOver,
    onMouseOut = _ref.onMouseOut,
    onMouseMove = _ref.onMouseMove,
    onMouseDown = _ref.onMouseDown,
    onMouseUp = _ref.onMouseUp,
    onScroll = _ref.onScroll,
    props = _objectWithoutProperties(_ref, _excluded);
  var sty = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, getTextStyle({
    color: color,
    textAlign: textAlign,
    textDecoration: textDecoration,
    textTransform: textTransform,
    textIndent: textIndent
  })), getFontStyle({
    fontFamily: fontFamily,
    fontStyle: fontStyle,
    fontSize: fontSize,
    fontWeight: fontWeight
  })), getMarginStyle({
    margin: margin,
    marginTop: marginTop,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    marginRight: marginRight
  })), getPaddingStyle({
    padding: padding,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight
  })), getDimensionStyle({
    height: height,
    lineHeight: lineHeight,
    maxHeight: maxHeight,
    minHeight: minHeight,
    width: width,
    maxWidth: maxWidth,
    minWidth: minWidth
  })), getDisplayStyle({
    display: display
  })), getPositionStyle({
    position: position,
    top: top,
    bottom: bottom,
    left: left,
    right: right
  })), getFlexStyle({
    flexDirection: flexDirection,
    flexWrap: flexWrap,
    justifyContent: justifyContent,
    alignItems: alignItems,
    alignContent: alignContent,
    order: order,
    flexGrow: flexGrow,
    flexShrink: flexShrink,
    flexBasis: flexBasis,
    alignSelf: alignSelf
  })), getBorderStyle({
    border: border,
    borderStyle: borderStyle,
    borderWidth: borderWidth,
    borderColor: borderColor,
    borderRadius: borderRadius,
    boxShadow: boxShadow
  })), getBackgroundStyle({
    background: background,
    backgroundColor: backgroundColor,
    backgroundImage: backgroundImage,
    backgroundRepeat: backgroundRepeat,
    backgroundAttachment: backgroundAttachment,
    backgroundPosition: backgroundPosition
  })), getRestStyle({
    cursor: cursor,
    overflow: overflow,
    overflowX: overflowX,
    overflowY: overflowY
  })), getCustomStyle({
    fullWidth: fullWidth,
    halfWidth: halfWidth,
    fullHeight: fullHeight,
    halfHeight: halfHeight,
    pointer: pointer,
    ellipsis: ellipsis
  }));
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: _objectSpread(_objectSpread({}, sty), style),
    className: className,
    onClick: onClick,
    onDrag: onDrag,
    onDrop: onDrop,
    onFocus: onFocus,
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onMouseOver: onMouseOver,
    onMouseOut: onMouseOut,
    onMouseMove: onMouseMove,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onScroll: onScroll
  }, props), children);
});