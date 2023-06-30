function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
export var Divider = function Divider(_ref) {
  var style = _ref.style,
    className = _ref.className,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'horizontal' : _ref$type,
    vertical = _ref.vertical,
    horizontal = _ref.horizontal,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'rgba(0, 0, 0, 0.1)' : _ref$color,
    _ref$thickness = _ref.thickness,
    thickness = _ref$thickness === void 0 ? 1 : _ref$thickness,
    _ref$length = _ref.length,
    length = _ref$length === void 0 ? 30 : _ref$length,
    _ref$fullLength = _ref.fullLength,
    fullLength = _ref$fullLength === void 0 ? false : _ref$fullLength,
    _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? 8 : _ref$gap;
  var sty = _objectSpread({
    backgroundColor: color
  }, style);
  var len = fullLength ? '100%' : length;
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
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({}, sty),
    className: className
  });
};