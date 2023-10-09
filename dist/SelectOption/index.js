function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import Button from "../Button";
import Checkbox from "../Checkbox";
import Flex from "../Flex";
import Text from "../Text";
import { CloseOutlined } from "../icons";
import { classnames } from "../utils/cssUtils";
import "./styles.css";
var SelectOption = function SelectOption(_ref) {
  var _classnames, _classnames2;
  var style = _ref.style,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    children = _ref.children,
    value = _ref.value,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    labelStyle = _ref.labelStyle,
    _ref$labelClassName = _ref.labelClassName,
    labelClassName = _ref$labelClassName === void 0 ? '' : _ref$labelClassName,
    _ref$boxVisible = _ref.boxVisible,
    boxVisible = _ref$boxVisible === void 0 ? false : _ref$boxVisible,
    _ref$groupTitle = _ref.groupTitle,
    groupTitle = _ref$groupTitle === void 0 ? false : _ref$groupTitle;
  var cls = classnames((_classnames = {}, _defineProperty(_classnames, 'select-option_wrapper', true), _defineProperty(_classnames, 'select-option_wrapper-hover', !disabled && !groupTitle), _defineProperty(_classnames, className, true), _classnames));
  var labelCls = classnames((_classnames2 = {}, _defineProperty(_classnames2, 'select-option_label-active', value === true), _defineProperty(_classnames2, 'select-option_label', true), _defineProperty(_classnames2, labelClassName, true), _classnames2));
  var labelSty = _objectSpread({}, labelStyle);
  if (groupTitle) {
    labelSty.fontSize = 14;
    labelSty.cursor = 'auto';
  }
  return /*#__PURE__*/React.createElement(Checkbox, {
    className: cls,
    style: style,
    labelStyle: labelSty,
    labelClassName: labelCls,
    boxVisible: boxVisible,
    value: value,
    onChange: onChange,
    disabled: disabled
  }, children);
};
export default SelectOption;
export var SelectDropdownHeader = function SelectDropdownHeader(_ref2) {
  var title = _ref2.title,
    onClick = _ref2.onClick;
  if (!title) return null;
  return /*#__PURE__*/React.createElement(Flex, {
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 15px 0"
  }, /*#__PURE__*/React.createElement(Text, {
    fontSize12: true,
    color666: true,
    bold: true
  }, title), /*#__PURE__*/React.createElement(Flex, {
    pointer: true,
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    onClick: onClick
  }, onClick ? /*#__PURE__*/React.createElement(CloseOutlined, {
    size: 12,
    color: "#666"
  }) : null));
};
export var SelectButtonGroup = function SelectButtonGroup(_ref3) {
  var _classnames3, _classnames4;
  var _ref3$clearAll = _ref3.clearAll,
    clearAll = _ref3$clearAll === void 0 ? true : _ref3$clearAll,
    onClearAll = _ref3.onClearAll,
    _ref3$selectAll = _ref3.selectAll,
    selectAll = _ref3$selectAll === void 0 ? true : _ref3$selectAll,
    onSelectAll = _ref3.onSelectAll;
  if (!clearAll && !selectAll) return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      width: 1
    }
  });
  var clearBtnCls = classnames((_classnames3 = {}, _defineProperty(_classnames3, 'select-button-group_item', true), _defineProperty(_classnames3, 'select-button-group_item-clear', true), _defineProperty(_classnames3, 'select-button-group_item-hover', clearAll), _classnames3));
  var selectBtnCls = classnames((_classnames4 = {}, _defineProperty(_classnames4, 'select-button-group_item', true), _defineProperty(_classnames4, 'select-button-group_item-select', true), _defineProperty(_classnames4, 'select-button-group_item-hover', selectAll), _classnames4));
  return /*#__PURE__*/React.createElement("div", {
    className: "select-button-group_wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: clearBtnCls,
    onClick: function onClick() {
      if (!clearAll) return;
      onClearAll === null || onClearAll === void 0 ? void 0 : onClearAll();
    }
  }, clearAll ? 'Clear all' : ''), /*#__PURE__*/React.createElement("div", {
    className: selectBtnCls,
    onClick: function onClick() {
      if (!selectAll) return;
      onSelectAll === null || onSelectAll === void 0 ? void 0 : onSelectAll();
    }
  }, selectAll ? 'Select all' : ''));
};
export var SelectOkButton = function SelectOkButton(_ref4) {
  var style = _ref4.style,
    className = _ref4.className,
    onClick = _ref4.onClick,
    disabled = _ref4.disabled;
  return /*#__PURE__*/React.createElement(Button, {
    shape: "square",
    primary: true,
    fullWidth: true,
    onClick: onClick,
    disabled: disabled,
    className: className,
    style: _objectSpread({
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    }, style)
  }, "OK");
};