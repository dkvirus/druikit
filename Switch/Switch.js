function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import { classnames } from "../utils/cssUtils";
import "./styles.css";
export var Switch = function Switch(_ref) {
  var _classnames, _classnames2, _classnames3, _classnames4;
  var style = _ref.style,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? false : _ref$value,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    leftLabel = _ref.leftLabel,
    rightLabel = _ref.rightLabel,
    label = _ref.label,
    labelStyle = _ref.labelStyle,
    _ref$labelClassName = _ref.labelClassName,
    labelClassName = _ref$labelClassName === void 0 ? '' : _ref$labelClassName,
    _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? 4 : _ref$gap;
  var cls = classnames((_classnames = {}, _defineProperty(_classnames, 'switch_wrapper', true), _defineProperty(_classnames, className, true), _classnames));
  var labelCls = classnames(['switch_switch-label', labelClassName]);
  var switchWrapperCls = classnames({
    'switch_switch-wrapper': true,
    'switch_switch-wrapper-disabled': disabled
  });
  var leftLabelItemCls = classnames((_classnames2 = {}, _defineProperty(_classnames2, 'switch_label-item', true), _defineProperty(_classnames2, 'switch_label-item-left-active', !value), _classnames2));
  var rightLabelItemCls = classnames((_classnames3 = {}, _defineProperty(_classnames3, 'switch_label-item', true), _defineProperty(_classnames3, 'switch_label-item-right-active', value), _classnames3));
  var switchHandleCls = classnames((_classnames4 = {}, _defineProperty(_classnames4, 'switch-switch-handle', true), _defineProperty(_classnames4, 'switch-switch-handle-active', value), _classnames4));
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
    className: leftLabelItemCls
  }, leftLabel), leftLabel ? gapEl : null, /*#__PURE__*/React.createElement("div", {
    className: "switch_switch-round",
    onClick: function onClick() {
      if (disabled) return;
      onChange === null || onChange === void 0 ? void 0 : onChange(!value);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: switchHandleCls
  })), rightLabel ? gapEl : null, /*#__PURE__*/React.createElement("div", {
    className: rightLabelItemCls
  }, rightLabel)));
};