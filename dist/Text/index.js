function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["style", "className", "children", "fontSize", "fontSize32", "fontSize16", "fontSize14", "fontSize12", "fontWeight", "bold", "bolder", "color", "color333", "color666", "color999", "colorBlue", "colorRed", "capitalize", "uppercase", "lowercase", "pointer"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { getColor, getFontSize, getFontWeight, getTextTransform } from "./utils";
var Text = function Text(_ref) {
  var style = _ref.style,
    className = _ref.className,
    children = _ref.children,
    fontSize = _ref.fontSize,
    fontSize32 = _ref.fontSize32,
    fontSize16 = _ref.fontSize16,
    fontSize14 = _ref.fontSize14,
    fontSize12 = _ref.fontSize12,
    fontWeight = _ref.fontWeight,
    bold = _ref.bold,
    bolder = _ref.bolder,
    color = _ref.color,
    color333 = _ref.color333,
    color666 = _ref.color666,
    color999 = _ref.color999,
    colorBlue = _ref.colorBlue,
    colorRed = _ref.colorRed,
    capitalize = _ref.capitalize,
    uppercase = _ref.uppercase,
    lowercase = _ref.lowercase,
    pointer = _ref.pointer,
    props = _objectWithoutProperties(_ref, _excluded);
  var sty = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, getFontSize({
    fontSize: fontSize,
    fontSize32: fontSize32,
    fontSize16: fontSize16,
    fontSize14: fontSize14,
    fontSize12: fontSize12
  })), getFontWeight({
    fontWeight: fontWeight,
    bold: bold,
    bolder: bolder
  })), getColor({
    color: color,
    color333: color333,
    color666: color666,
    color999: color999,
    colorBlue: colorBlue,
    colorRed: colorRed
  })), getTextTransform({
    capitalize: capitalize,
    uppercase: uppercase,
    lowercase: lowercase
  }));
  if (pointer) {
    sty.cursor = 'pointer';
  }
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: className,
    style: _objectSpread(_objectSpread({}, sty), style)
  }), children);
};
export default Text;