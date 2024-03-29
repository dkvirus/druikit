function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["style", "className", "value", "onChange", "disabled", "options", "size", "label", "labelStyle", "labelClassName", "placeholder", "selectorTextWhenSelectAll", "dropdownTitle", "dropdownMaxHeight", "dropdownStyle", "dropdownClassName", "dropdownLabelStyle", "dropdownLabelClassName", "selectAll", "clearAll", "minCount", "maxCount", "formatMinCountMessage", "formatMaxCountMessage", "boxPosition", "okClosable", "clickAwayClosable"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useEffect, useRef, useState } from 'react';
import BaseSelect from "../BaseSelect";
import Divider from "../Divider";
import SelectOption, { SelectButtonGroup, SelectDropdownHeader, SelectOkButton } from "../SelectOption";
function getOpts(options, value) {
  var newOptions = options.map(function (o) {
    return o;
  });
  newOptions.forEach(function (o) {
    if (o.disabled) return;
    o.checked = value.includes(o.value || '');
  });
  return newOptions;
}
function getSelectorValue(options) {
  var selectorText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'All';
  var newOptions = options.filter(function (o) {
    return !o.disabled && o.checked;
  });
  if (options.every(function (o) {
    return !o.disabled && o.checked;
  })) {
    return selectorText;
  }
  var value = newOptions.map(function (o) {
    return o.value;
  });
  if (value.length > 1) {
    var label = newOptions[0].label;
    return "".concat(label.length > 7 ? label.slice(0, 6) + '...' : label, ", +").concat(value.length - 1);
  } else if (value.length === 1) {
    return newOptions[0].label;
  } else {
    return '';
  }
}
function getSelectedValue(options) {
  var newOptions = options.filter(function (o) {
    return !o.disabled && o.checked;
  });
  var value = newOptions.map(function (o) {
    return o.value;
  });
  return value;
}

// function getUnselectedValue(options: OptionItem[]) {
//   const newOptions = options.filter((o) => !o.disabled && !o.checked);
//   const value = newOptions.map((o) => o.value);
//   return value;
// }

var MultiSelect = function MultiSelect(_ref) {
  var style = _ref.style,
    className = _ref.className,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? [] : _ref$value,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'middle' : _ref$size,
    label = _ref.label,
    labelStyle = _ref.labelStyle,
    labelClassName = _ref.labelClassName,
    placeholder = _ref.placeholder,
    _ref$selectorTextWhen = _ref.selectorTextWhenSelectAll,
    selectorTextWhenSelectAll = _ref$selectorTextWhen === void 0 ? 'All' : _ref$selectorTextWhen,
    dropdownTitle = _ref.dropdownTitle,
    _ref$dropdownMaxHeigh = _ref.dropdownMaxHeight,
    dropdownMaxHeight = _ref$dropdownMaxHeigh === void 0 ? 300 : _ref$dropdownMaxHeigh,
    dropdownStyle = _ref.dropdownStyle,
    dropdownClassName = _ref.dropdownClassName,
    dropdownLabelStyle = _ref.dropdownLabelStyle,
    dropdownLabelClassName = _ref.dropdownLabelClassName,
    _ref$selectAll = _ref.selectAll,
    selectAll = _ref$selectAll === void 0 ? true : _ref$selectAll,
    _ref$clearAll = _ref.clearAll,
    clearAll = _ref$clearAll === void 0 ? true : _ref$clearAll,
    _ref$minCount = _ref.minCount,
    minCount = _ref$minCount === void 0 ? 0 : _ref$minCount,
    _ref$maxCount = _ref.maxCount,
    maxCount = _ref$maxCount === void 0 ? 9999 : _ref$maxCount,
    formatMinCountMessage = _ref.formatMinCountMessage,
    formatMaxCountMessage = _ref.formatMaxCountMessage,
    boxPosition = _ref.boxPosition,
    _ref$okClosable = _ref.okClosable,
    okClosable = _ref$okClosable === void 0 ? true : _ref$okClosable,
    _ref$clickAwayClosabl = _ref.clickAwayClosable,
    clickAwayClosable = _ref$clickAwayClosabl === void 0 ? false : _ref$clickAwayClosabl,
    props = _objectWithoutProperties(_ref, _excluded);
  var selectRef = useRef(null);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    opts = _useState2[0],
    setOpts = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    selectorValue = _useState4[0],
    setSelectorValue = _useState4[1];
  useEffect(function () {
    var newOpts = getOpts(options, value);
    if (JSON.stringify(opts) === JSON.stringify(newOpts)) return;
    setOpts(newOpts);
  }, [options, value]);
  useEffect(function () {
    setSelectorValue(getSelectorValue(opts, selectorTextWhenSelectAll));
  }, [opts]);

  /* ************************* dropdown ******************************* */
  var dropdownSty = _objectSpread({
    padding: 0,
    minWidth: 164
  }, dropdownStyle);
  var dropdownLabelSty = _objectSpread({
    width: 'fit-content',
    whiteSpace: 'nowrap'
  }, dropdownLabelStyle);
  var onClick = function onClick(checked, item) {
    if (item.disabled) return;
    var newOpts = opts.map(function (o) {
      return o;
    });
    newOpts.forEach(function (o) {
      if (o.value === item.value) {
        item.checked = !item.checked;
      }
    });
    setOpts(newOpts);
  };

  /**
   * 考虑 minCount
   */
  var onClearAll = function onClearAll() {
    var newOpts = opts.map(function (o) {
      return o;
    });
    newOpts.forEach(function (item) {
      item.checked = false;
    });
    setOpts(newOpts);
    setSelectorValue(getSelectorValue(newOpts, selectorTextWhenSelectAll));
  };

  /**
   * 考虑 maxCount
   */
  var onSelectAll = function onSelectAll() {
    var newOpts = opts.map(function (o) {
      return o;
    });
    newOpts.forEach(function (item) {
      if (!item.disabled) {
        item.checked = true;
      }
    });
    setOpts(newOpts);
    setSelectorValue(getSelectorValue(newOpts, selectorTextWhenSelectAll));
  };
  var onOk = function onOk() {
    var _selectRef$current2;
    if (okDisabled) return;
    var selectedValue = getSelectedValue(opts);
    if (JSON.stringify(value.sort()) === JSON.stringify(selectedValue.sort()) && okClosable) {
      var _selectRef$current;
      (_selectRef$current = selectRef.current) === null || _selectRef$current === void 0 ? void 0 : _selectRef$current.close();
      return;
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(selectedValue);
    (_selectRef$current2 = selectRef.current) === null || _selectRef$current2 === void 0 ? void 0 : _selectRef$current2.close();
  };
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    okDisabled = _useState6[0],
    setOkDisabled = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showMaxCountMessage = _useState8[0],
    setShowMaxCountMessage = _useState8[1];
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    showMinCountMessage = _useState10[0],
    setShowMinCountMessage = _useState10[1];
  useEffect(function () {
    var newOpts = opts.map(function (o) {
      return o;
    });
    var selectedValue = getSelectedValue(newOpts);
    setOkDisabled((selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.length) > maxCount || (selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.length) < minCount);
    setShowMaxCountMessage((selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.length) > maxCount);
    setShowMinCountMessage((selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.length) < minCount);
  }, [opts]);
  var countMessageSty = {
    fontSize: 12,
    color: 'red',
    paddingInline: 15,
    marginTop: 8
  };
  var renderDropdown = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectDropdownHeader, {
    title: dropdownTitle,
    onClick: function onClick() {
      var _selectRef$current3;
      return (_selectRef$current3 = selectRef.current) === null || _selectRef$current3 === void 0 ? void 0 : _selectRef$current3.close();
    }
  }), showMaxCountMessage ? /*#__PURE__*/React.createElement("div", {
    style: countMessageSty
  }, typeof formatMaxCountMessage === 'function' ? formatMaxCountMessage(maxCount) : "Maximum ".concat(maxCount, ".")) : null, showMinCountMessage ? /*#__PURE__*/React.createElement("div", {
    style: countMessageSty
  }, typeof formatMinCountMessage === 'function' ? formatMinCountMessage(minCount) : "Minimum ".concat(minCount, ".")) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: dropdownMaxHeight,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(SelectButtonGroup, {
    clearAll: clearAll,
    onClearAll: onClearAll,
    selectAll: selectAll,
    onSelectAll: onSelectAll
  }), selectAll || clearAll ? /*#__PURE__*/React.createElement(Divider, {
    fullLength: true,
    gap: 0,
    color: "#eee"
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 10,
      paddingBottom: 10
    }
  }, opts.map(function (item, index) {
    var key = item.label + index.toString();
    var disabled = item.disabled;
    if (typeof item.value === 'string') {
      return /*#__PURE__*/React.createElement(SelectOption, {
        key: key,
        labelStyle: dropdownLabelSty,
        labelClassName: dropdownLabelClassName,
        value: item.checked,
        onChange: function onChange(checked) {
          return onClick(checked, item);
        },
        disabled: disabled,
        boxVisible: true,
        boxPosition: boxPosition
      }, item.label);
    }
    return /*#__PURE__*/React.createElement(SelectOption, {
      key: key,
      groupTitle: true,
      labelClassName: item.labelClassName,
      boxPosition: boxPosition
    }, item.label);
  }))), /*#__PURE__*/React.createElement(SelectOkButton, {
    onClick: onOk,
    disabled: okDisabled
  }));
  return /*#__PURE__*/React.createElement(BaseSelect, _extends({
    ref: selectRef,
    style: style,
    className: className,
    disabled: disabled,
    label: label,
    labelStyle: labelStyle,
    labelClassName: labelClassName,
    selectorValue: selectorValue,
    selectorSize: size,
    placeholder: placeholder,
    renderDropdown: renderDropdown,
    dropdownStyle: dropdownSty,
    dropdownClassName: dropdownClassName,
    clickAwayClosable: clickAwayClosable,
    onClickAway: function onClickAway() {
      var _selectRef$current4;
      // 当前是关闭状态, 直接返回
      if (!((_selectRef$current4 = selectRef.current) !== null && _selectRef$current4 !== void 0 && _selectRef$current4.getIsOpen())) return;
      onOk();
    }
  }, props));
};
export default MultiSelect;