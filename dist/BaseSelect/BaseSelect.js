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
import React, { useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import { ClickAwayListener } from "../ClickAwayListener";
import { CaretDownOutlined } from "../icons";
import { classnames, handlePlacement } from "../utils/cssUtils";
import "./styles.css";
export var BaseSelect = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var style = _ref.style,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    renderSelector = _ref.renderSelector,
    selectorStyle = _ref.selectorStyle,
    _ref$selectorClassNam = _ref.selectorClassName,
    selectorClassName = _ref$selectorClassNam === void 0 ? '' : _ref$selectorClassNam,
    selectorValue = _ref.selectorValue,
    renderDropdown = _ref.renderDropdown,
    dropdownStyle = _ref.dropdownStyle,
    _ref$dropdownClassNam = _ref.dropdownClassName,
    dropdownClassName = _ref$dropdownClassNam === void 0 ? '' : _ref$dropdownClassNam,
    disabled = _ref.disabled,
    onOpenChanged = _ref.onOpenChanged,
    placeholder = _ref.placeholder,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'bottomLeft' : _ref$placement;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var selected = Boolean(selectorValue);
  useEffect(function () {
    onOpenChanged === null || onOpenChanged === void 0 ? void 0 : onOpenChanged(open);
  }, [open]);

  /* ************************* select ****************************** */
  var sty = _objectSpread({}, style);
  var cls = classnames(_defineProperty({
    'base-select_select': true,
    'base-select_select-disabled': disabled
  }, className, true));

  /* ************************* selector ****************************** */
  var selectorCls = classnames(_defineProperty({
    'base-select_selector': true,
    'base-select_selector-selected': selected
  }, selectorClassName, true));
  var selectorSelectionCls = classnames(['base-select_selector-selection']);
  var selectorArrowCls = classnames({
    'base-select_selector-arrow': true,
    'base-select_selector-arrow-open': open,
    'base-select_selector-arrow-selected': selected
  });

  /* ************************* dropdown ****************************** */
  var dropdownSty = _objectSpread(_objectSpread({
    top: 50
  }, dropdownStyle), handlePlacement(placement));
  var dropdownCls = classnames(_defineProperty({
    'base-select_dropdown': true,
    'base-select_dropdown-open': open
  }, dropdownClassName, true));

  /* ************************* 组件对外暴露的方法 ****************************** */
  useImperativeHandle(ref, function () {
    return {
      close: function close() {
        return setOpen(false);
      }
    };
  });
  var onClickSelector = function onClickSelector() {
    if (disabled) return;
    setOpen(!open);
  };
  return /*#__PURE__*/React.createElement(ClickAwayListener, {
    onClickAway: function onClickAway() {
      return setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: sty,
    className: cls
  }, renderSelector ? /*#__PURE__*/React.createElement("div", {
    onClick: onClickSelector
  }, renderSelector) : /*#__PURE__*/React.createElement("div", {
    style: selectorStyle,
    className: selectorCls,
    onClick: onClickSelector
  }, /*#__PURE__*/React.createElement("div", {
    className: selectorSelectionCls
  }, selectorValue || placeholder), /*#__PURE__*/React.createElement(CaretDownOutlined, {
    className: selectorArrowCls
  })), /*#__PURE__*/React.createElement("div", {
    style: dropdownSty,
    className: dropdownCls
  }, renderDropdown)));
});