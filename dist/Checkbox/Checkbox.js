function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { CheckOutlined, Flex } from "./..";
import React from 'react';
export var Checkbox = function Checkbox(_ref) {
  var style = _ref.style,
    className = _ref.className,
    value = _ref.value,
    onChange = _ref.onChange,
    children = _ref.children,
    labelStyle = _ref.labelStyle,
    labelClassName = _ref.labelClassName,
    _ref$labelColor = _ref.labelColor,
    labelColor = _ref$labelColor === void 0 ? '#666' : _ref$labelColor,
    _ref$labelSize = _ref.labelSize,
    labelSize = _ref$labelSize === void 0 ? 12 : _ref$labelSize,
    boxStyle = _ref.boxStyle,
    boxClassName = _ref.boxClassName,
    _ref$boxBgColor = _ref.boxBgColor,
    boxBgColor = _ref$boxBgColor === void 0 ? '#eeeeee' : _ref$boxBgColor,
    _ref$boxColor = _ref.boxColor,
    boxColor = _ref$boxColor === void 0 ? '#999999' : _ref$boxColor,
    _ref$boxSize = _ref.boxSize,
    boxSize = _ref$boxSize === void 0 ? 15 : _ref$boxSize,
    boxPosition = _ref.boxPosition,
    _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? 10 : _ref$gap;
  /* ******************************** label *********************************** */
  var labelSty = {};
  if (typeof labelColor !== 'undefined') {
    labelSty.color = labelColor;
  }
  if (typeof labelSize !== 'undefined') {
    labelSty.fontSize = labelSize;
  }
  var labelEl = /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({
      flex: 1
    }, labelStyle), labelSty),
    className: labelClassName
  }, children);

  /* ******************************** box *********************************** */
  var boxEl = /*#__PURE__*/React.createElement(Flex, {
    justifyContent: "center",
    alignItems: "center",
    className: boxClassName,
    style: _objectSpread(_objectSpread({
      minWidth: boxSize,
      minHeight: boxSize
    }, boxStyle), {}, {
      backgroundColor: boxBgColor
    })
  }, value === true ? /*#__PURE__*/React.createElement(CheckOutlined, {
    color: boxColor,
    size: boxSize * 0.9
  }) : null);

  /* ******************************** gap *********************************** */
  var gapEl = /*#__PURE__*/React.createElement("div", {
    style: {
      width: gap
    }
  });

  /* ******************************** 组装 *********************************** */
  var contentEl = /*#__PURE__*/React.createElement(React.Fragment, null, boxEl, gapEl, labelEl);
  if (boxPosition === 'right') {
    contentEl = /*#__PURE__*/React.createElement(React.Fragment, null, labelEl, gapEl, boxEl);
  }
  return /*#__PURE__*/React.createElement(Flex, {
    pointer: true,
    alignItems: "center",
    style: style,
    className: className,
    onClick: function onClick() {
      return onChange === null || onChange === void 0 ? void 0 : onChange(!value);
    }
  }, contentEl);
};