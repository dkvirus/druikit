var _excluded = ["style", "className", "value", "onChange", "onFormat", "label"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useEffect, useRef, useState } from 'react';
import BaseSelect from "../BaseSelect";
import MonthPanel from "../MonthPanel";
import { MONTHS_ABBR } from "../utils/dateUtils";
var MonthPicker = function MonthPicker(_ref) {
  var style = _ref.style,
    className = _ref.className,
    value = _ref.value,
    onChange = _ref.onChange,
    onFormat = _ref.onFormat,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    props = _objectWithoutProperties(_ref, _excluded);
  var selectRef = useRef(null);
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    selectorValue = _useState2[0],
    setSelectorValue = _useState2[1];
  var handleInputValue = function handleInputValue(value) {
    if (typeof onFormat === 'function') {
      setSelectorValue(onFormat(value));
    } else {
      setSelectorValue("".concat(MONTHS_ABBR[value.month], ". ").concat(value.year));
    }
  };
  var onMonthPanelChange = function onMonthPanelChange(value) {
    var _selectRef$current;
    handleInputValue(value);
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
    (_selectRef$current = selectRef.current) === null || _selectRef$current === void 0 ? void 0 : _selectRef$current.close();
  };
  useEffect(function () {
    if (!value) return;
    handleInputValue(value);
  }, [value]);
  return /*#__PURE__*/React.createElement("div", {
    style: style,
    className: className
  }, /*#__PURE__*/React.createElement(BaseSelect, _extends({
    label: label,
    selectorValue: selectorValue,
    renderDropdown: /*#__PURE__*/React.createElement(MonthPanel, {
      value: value,
      onChange: onMonthPanelChange
    }),
    ref: selectRef
  }, props)));
};
export default MonthPicker;