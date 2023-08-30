function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { LoadingOutlined } from "./..";
import React from 'react';
var Button = function Button(_ref) {
  var style = _ref.style,
    className = _ref.className,
    children = _ref.children,
    _onClick = _ref.onClick,
    disabled = _ref.disabled,
    loading = _ref.loading,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'default' : _ref$type,
    danger = _ref.danger,
    primary = _ref.primary,
    _ref$bordered = _ref.bordered,
    bordered = _ref$bordered === void 0 ? true : _ref$bordered,
    prefix = _ref.prefix,
    suffix = _ref.suffix,
    _ref$shape = _ref.shape,
    shape = _ref$shape === void 0 ? 'round' : _ref$shape,
    fullWidth = _ref.fullWidth,
    left = _ref.left,
    right = _ref.right,
    _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? 10 : _ref$gap;
  var sty = {
    padding: '0 20px',
    height: 36,
    textAlign: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    cursor: 'pointer',
    boxSizing: 'border-box'
  };

  /* *************************** left, right ***************************** */
  if (typeof left !== 'undefined') {
    sty.marginLeft = left;
  }
  if (typeof right !== 'undefined') {
    sty.marginRight = right;
  }

  /* *************************** type, danger, primary ***************************** */
  if (type === 'default') {
    sty.color = '#666';
    sty.border = '1px solid #a0a0a0';
  }
  if (type === 'danger' || danger) {
    sty.backgroundColor = '#ec7765';
    sty.color = '#ffffff';
    sty.border = '1px solid #ec7765';
  }
  if (type === 'primary' || primary) {
    sty.backgroundColor = '#01a699';
    sty.color = '#fff';
    sty.border = '1px solid #01a699';
  }

  /* *************************** bordered ***************************** */
  if (!bordered) {
    sty.border = 'none';
  }

  /* *************************** fullWidth ***************************** */
  if (fullWidth) {
    sty.width = '100%';
  }

  /* *************************** disabled ***************************** */
  if (disabled) {
    // sty.backgroundColor = 'rgba(0,0,0,.04)';
    // sty.color = 'rgba(0,0,0,.25)';
    sty.opacity = 0.5;
    sty.border = '1px solid #d9d9d9';
    sty.cursor = 'not-allowed';
  }

  /* *************************** loading ***************************** */
  if (loading) {
    sty.opacity = 0.65;
  }

  /* *************************** shape ***************************** */
  if (shape === 'round') {
    sty.borderRadius = 18;
  } else {
    sty.borderRadius = 4;
  }

  /* *************************** gap ***************************** */
  var gapEl = /*#__PURE__*/React.createElement("div", {
    style: {
      width: gap
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, sty), style),
    className: className,
    onClick: function onClick() {
      if (disabled) return;
      _onClick === null || _onClick === void 0 ? void 0 : _onClick();
    }
  }, loading ? /*#__PURE__*/React.createElement(LoadingOutlined, {
    size: 20
  }) : null, prefix, prefix || loading ? gapEl : null, children, suffix ? gapEl : null, suffix);
};
export default Button;