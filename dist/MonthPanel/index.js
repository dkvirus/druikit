function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
import { classnames } from "../utils/cssUtils";
import { MONTHS_ABBR } from "../utils/dateUtils";
import "./styles.css";
var MonthPanel = function MonthPanel(_ref) {
  var _classnames3;
  var style = _ref.style,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    value = _ref.value,
    onChange = _ref.onChange;
  var currentYear = new Date().getFullYear();
  var currentMonth = new Date().getMonth();
  var yearArr = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
  var monthArr = MONTHS_ABBR;
  var _useState = useState(new Date().getFullYear()),
    _useState2 = _slicedToArray(_useState, 2),
    year = _useState2[0],
    setYear = _useState2[1];
  var _useState3 = useState(new Date().getMonth()),
    _useState4 = _slicedToArray(_useState3, 2),
    month = _useState4[0],
    setMonth = _useState4[1];
  var _useState5 = useState(true),
    _useState6 = _slicedToArray(_useState5, 2),
    showMonth = _useState6[0],
    setShowMonth = _useState6[1];
  useEffect(function () {
    if (!(value !== null && value !== void 0 && value.year)) return;
    setYear(value.year);
    setMonth(value.month);
  }, [value]);
  var onClickMonth = function onClickMonth(monthIndex) {
    setMonth(monthIndex);
    onChange === null || onChange === void 0 ? void 0 : onChange({
      year: year,
      month: monthIndex
    });
  };
  var monthPanelBody = monthArr.map(function (item, index) {
    var _classnames;
    var disabled = year > currentYear || year === currentYear && index > currentMonth;
    var cls = classnames((_classnames = {}, _defineProperty(_classnames, 'month-panel_panel-item', true), _defineProperty(_classnames, 'month-panel_panel-item-active', index === month), _defineProperty(_classnames, 'month-panel_panel-item-disabled', disabled), _classnames));
    return /*#__PURE__*/React.createElement("div", {
      key: item,
      className: cls,
      onClick: function onClick() {
        if (disabled) return;
        onClickMonth(index);
      }
    }, item);
  });
  var onClickYear = function onClickYear(y) {
    setYear(y);
    if (y === currentYear && month > currentMonth) {
      setMonth(currentMonth);
      onChange === null || onChange === void 0 ? void 0 : onChange({
        year: year,
        month: currentMonth
      });
    }
    setShowMonth(true);
  };
  var yearPanelBody = yearArr.map(function (item) {
    var _classnames2;
    var disabled = item > currentYear;
    var cls = classnames((_classnames2 = {}, _defineProperty(_classnames2, 'month-panel_panel-item', true), _defineProperty(_classnames2, 'month-panel_panel-item-active', item === year), _defineProperty(_classnames2, 'month-panel_panel-item-disabled', disabled), _classnames2));
    return /*#__PURE__*/React.createElement("div", {
      key: item,
      className: cls,
      onClick: function onClick() {
        if (disabled) return;
        onClickYear(item);
      }
    }, item);
  });
  var cls = classnames((_classnames3 = {}, _defineProperty(_classnames3, 'month-panel_wrapper', true), _defineProperty(_classnames3, className, true), _classnames3));
  return /*#__PURE__*/React.createElement("div", {
    style: style,
    className: cls
  }, /*#__PURE__*/React.createElement("div", {
    className: "month-panel_header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "month-panel_header-year",
    onClick: function onClick() {
      return setShowMonth(!showMonth);
    }
  }, showMonth ? year : monthArr[month])), /*#__PURE__*/React.createElement("div", {
    className: "month-panel_body"
  }, showMonth ? monthPanelBody : yearPanelBody));
};
export default MonthPanel;