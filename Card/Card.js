function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import { classnames } from "../utils/cssUtils";
import "./styles.css";
export var Card = function Card(_ref) {
  var _classnames;
  var style = _ref.style,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    children = _ref.children,
    width = _ref.width,
    fullWidth = _ref.fullWidth,
    height = _ref.height,
    fullHeight = _ref.fullHeight,
    _ref$fringed = _ref.fringed,
    fringed = _ref$fringed === void 0 ? true : _ref$fringed,
    fringeStyle = _ref.fringeStyle,
    _ref$fringeClassName = _ref.fringeClassName,
    fringeClassName = _ref$fringeClassName === void 0 ? '' : _ref$fringeClassName,
    _ref$fringeHeight = _ref.fringeHeight,
    fringeHeight = _ref$fringeHeight === void 0 ? 12 : _ref$fringeHeight;
  var sty = _objectSpread(_objectSpread({}, style), {}, {
    minHeight: 2,
    minWidth: 2,
    width: width,
    height: height
  });
  if (fullWidth) {
    sty.width = '100%';
  }
  if (fullHeight) {
    sty.height = '100%';
  }
  var cls = classnames((_classnames = {}, _defineProperty(_classnames, 'card_wrapper', true), _defineProperty(_classnames, className, true), _classnames));

  /* *************************** fringed ***************************** */
  var fringeEl = null;
  if (fringed) {
    var fringeSty = _objectSpread(_objectSpread({}, fringeStyle), {}, {
      height: fringeHeight
    });
    var fringeCls = classnames(['card_fringe', fringeClassName]);
    fringeEl = /*#__PURE__*/React.createElement("div", {
      style: fringeSty,
      className: fringeCls
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: sty,
    className: cls
  }, fringeEl, children);
};