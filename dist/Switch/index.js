function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import { classnames } from "../utils/cssUtils";
import "./styles.css";
var Switch = function Switch(_ref) {
  var _classnames, _classnames3, _classnames4, _classnames5;
  var style = _ref.style,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? false : _ref$value,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    leftLabel = _ref.leftLabel,
    leftLabelStyle = _ref.leftLabelStyle,
    _ref$leftLabelClassNa = _ref.leftLabelClassName,
    leftLabelClassName = _ref$leftLabelClassNa === void 0 ? '' : _ref$leftLabelClassNa,
    rightLabel = _ref.rightLabel,
    rightLabelStyle = _ref.rightLabelStyle,
    _ref$rightLabelClassN = _ref.rightLabelClassName,
    rightLabelClassName = _ref$rightLabelClassN === void 0 ? '' : _ref$rightLabelClassN,
    label = _ref.label,
    labelStyle = _ref.labelStyle,
    _ref$labelClassName = _ref.labelClassName,
    labelClassName = _ref$labelClassName === void 0 ? '' : _ref$labelClassName,
    _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? 4 : _ref$gap,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'middle' : _ref$size;
  var cls = classnames((_classnames = {}, _defineProperty(_classnames, 'switch_wrapper', true), _defineProperty(_classnames, className, true), _classnames));
  var labelCls = classnames(['switch_switch-label', labelClassName]);
  var switchWrapperCls = classnames(_defineProperty({
    'switch_switch-wrapper': true,
    'switch_switch-wrapper-disabled': disabled
  }, "switch_switch-wrapper-".concat(size), true));
  var leftLabelItemCls = classnames((_classnames3 = {}, _defineProperty(_classnames3, 'switch_label-item', true), _defineProperty(_classnames3, "switch_label-item-".concat(size), true), _defineProperty(_classnames3, 'switch_label-item-left-active', !value), _defineProperty(_classnames3, leftLabelClassName, true), _classnames3));
  var rightLabelItemCls = classnames((_classnames4 = {}, _defineProperty(_classnames4, 'switch_label-item', true), _defineProperty(_classnames4, "switch_label-item-".concat(size), true), _defineProperty(_classnames4, 'switch_label-item-right-active', value), _defineProperty(_classnames4, rightLabelClassName, true), _classnames4));
  var switchHandleCls = classnames((_classnames5 = {}, _defineProperty(_classnames5, 'switch_switch-handle', true), _defineProperty(_classnames5, 'switch_switch-handle-active', value), _classnames5));
  var gapEl = /*#__PURE__*/React.createElement("div", {
    style: {
      width: gap
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: style,
    className: cls
  }, /*#__PURE__*/React.createElement("div", {
    style: labelStyle,
    className: labelCls
  }, label), /*#__PURE__*/React.createElement("div", {
    className: switchWrapperCls
  }, /*#__PURE__*/React.createElement("div", {
    className: leftLabelItemCls,
    style: leftLabelStyle
  }, leftLabel), leftLabel ? gapEl : null, /*#__PURE__*/React.createElement("div", {
    className: "switch_switch-round",
    onClick: function onClick() {
      if (disabled) return;
      onChange === null || onChange === void 0 ? void 0 : onChange(!value);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: switchHandleCls
  })), rightLabel ? gapEl : null, /*#__PURE__*/React.createElement("div", {
    className: rightLabelItemCls,
    style: rightLabelStyle
  }, rightLabel)));
};
export default Switch;