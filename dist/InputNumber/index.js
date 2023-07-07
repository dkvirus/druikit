function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useEffect, useState } from 'react';
import { numberUtils } from "../utils/numberUtils";
/**
 * value = 10.0 在页面上回显会变成 10, 因为数值 10.0 会自动变成数值 10
 * 但业务上有时需要回显也是 10.0, 基于这个原则, value 允许是字符串
 */
var InputNumber = function InputNumber(_ref) {
  var style = _ref.style,
    className = _ref.className,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    max = _ref.max,
    min = _ref.min,
    _ref$maxLength = _ref.maxLength,
    maxLength = _ref$maxLength === void 0 ? 9999 : _ref$maxLength,
    _ref$empty = _ref.empty,
    empty = _ref$empty === void 0 ? true : _ref$empty,
    disabled = _ref.disabled,
    placeholder = _ref.placeholder,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 88 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 30 : _ref$height,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 11 : _ref$padding,
    _ref$fontSize = _ref.fontSize,
    fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
    _ref$textAlign = _ref.textAlign,
    textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign;
  var handleEmpty = function handleEmpty() {
    if (empty) return '';
    return min ? String(min) : '0';
  };
  var handleData = function handleData(inputValue) {
    if (!numberUtils.isNumberOfStringType(inputValue) || inputValue === null || String(inputValue) === '') {
      return handleEmpty();
    }
    var valueNum = Number(inputValue);
    if (typeof max === 'number' && max < valueNum) {
      return String(max);
    }
    if (typeof min === 'number' && min > valueNum) {
      return String(min);
    }
    return String(inputValue).slice(0, maxLength);
  };
  var _useState = useState(handleData(value)),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  useEffect(function () {
    setData(handleData(value));
  }, [value]);
  var onInputChange = function onInputChange(e) {
    var inputValue = e.target.value.trim().slice(0, maxLength);
    if (inputValue === '') return setData('');
    setData(inputValue);
    onChange === null || onChange === void 0 ? void 0 : onChange(inputValue);
  };
  var onInputBlur = function onInputBlur() {
    var inputValue = handleData(data);
    setData(inputValue);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(inputValue);
  };
  var sty = {
    border: '.5px solid #979797',
    borderRadius: 5,
    color: '#666',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'Nunito Sans, sans-serif',
    width: width,
    height: height,
    fontSize: fontSize,
    paddingLeft: padding,
    paddingRight: padding,
    textAlign: textAlign
  };
  return /*#__PURE__*/React.createElement("input", {
    style: _objectSpread(_objectSpread({}, sty), style),
    className: className,
    value: data,
    onChange: onInputChange,
    onBlur: onInputBlur,
    disabled: disabled,
    placeholder: placeholder
  });
};
export default InputNumber;