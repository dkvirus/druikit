function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
export var Button = function Button(_ref) {
  var style = _ref.style,
    className = _ref.className,
    children = _ref.children,
    onClick = _ref.onClick,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'red' : _ref$type,
    prefix = _ref.prefix,
    suffix = _ref.suffix,
    _ref$shape = _ref.shape,
    shape = _ref$shape === void 0 ? 'round' : _ref$shape,
    left = _ref.left,
    right = _ref.right;
  var sty = {
    padding: '0 20px',
    height: 36,
    textAlign: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    cursor: 'pointer'
  };
  if (typeof left !== 'undefined') {
    sty.marginLeft = left;
  }
  if (typeof right !== 'undefined') {
    sty.marginRight = right;
  }
  if (type === 'red') {
    sty.backgroundColor = '#ec7765';
    sty.color = '#ffffff';
  } else {
    sty.color = '#666';
    sty.border = '1px solid #a0a0a0';
  }
  if (shape === 'round') {
    sty.borderRadius = 18;
  } else {
    sty.borderRadius = 4;
  }
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, sty), style),
    className: className,
    onClick: onClick
  }, prefix, children, suffix);
};