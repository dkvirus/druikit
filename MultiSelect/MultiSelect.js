function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["style", "className", "value", "onChange", "disabled", "options", "label", "labelStyle", "labelClassName", "placeholder", "dropdownTitle", "dropdownMaxHeight", "dropdownStyle", "dropdownClassName", "selectAll", "clearAll", "minCount", "maxCount"];
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
import { BaseSelect } from "../BaseSelect";
import { Divider } from "../Divider";
import { SelectButtonGroup, SelectDropdownHeader, SelectOkButton, SelectOption } from "../SelectOption";
function getOpts(options, value) {
  var newOptions = options.map(function (o) {
    return o;
  });
  newOptions.forEach(function (o) {
    if (o.disabled) return;
    o.checked = value.includes(o.value);
  });
  return newOptions;
}
function getSelectorValue(options) {
  var newOptions = options.filter(function (o) {
    return !o.disabled && o.checked;
  });
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
function getUnselectedValue(options) {
  var newOptions = options.filter(function (o) {
    return !o.disabled && !o.checked;
  });
  var value = newOptions.map(function (o) {
    return o.value;
  });
  return value;
}
export var MultiSelect = function MultiSelect(_ref) {
  var style = _ref.style,
    className = _ref.className,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? [] : _ref$value,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    label = _ref.label,
    labelStyle = _ref.labelStyle,
    labelClassName = _ref.labelClassName,
    placeholder = _ref.placeholder,
    dropdownTitle = _ref.dropdownTitle,
    _ref$dropdownMaxHeigh = _ref.dropdownMaxHeight,
    dropdownMaxHeight = _ref$dropdownMaxHeigh === void 0 ? 300 : _ref$dropdownMaxHeigh,
    dropdownStyle = _ref.dropdownStyle,
    dropdownClassName = _ref.dropdownClassName,
    _ref$selectAll = _ref.selectAll,
    selectAll = _ref$selectAll === void 0 ? true : _ref$selectAll,
    _ref$clearAll = _ref.clearAll,
    clearAll = _ref$clearAll === void 0 ? true : _ref$clearAll,
    _ref$minCount = _ref.minCount,
    minCount = _ref$minCount === void 0 ? 0 : _ref$minCount,
    _ref$maxCount = _ref.maxCount,
    maxCount = _ref$maxCount === void 0 ? 9999 : _ref$maxCount,
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
    setSelectorValue(getSelectorValue(opts));
  }, [opts]);

  /* ************************* dropdown ******************************* */
  var dropdownSty = _objectSpread({
    padding: 0,
    minWidth: 164,
    maxHeight: 330
  }, dropdownStyle);
  var dropdownLabelStyle = _objectSpread({
    width: 'fit-content',
    whiteSpace: 'nowrap'
  }, labelStyle);
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
    var selectedValue = getSelectedValue(newOpts).slice(0, minCount);
    newOpts.forEach(function (o) {
      o.checked = selectedValue.includes(o.value);
    });
    setOpts(newOpts);
    setSelectorValue(getSelectorValue(newOpts));
  };

  /**
   * 考虑 maxCount
   */
  var onSelectAll = function onSelectAll() {
    var newOpts = opts.map(function (o) {
      return o;
    });
    var selectedValue = getSelectedValue(newOpts);
    var unselectedValue = getUnselectedValue(newOpts).slice(0, maxCount - selectedValue.length);
    newOpts.forEach(function (o) {
      if (unselectedValue.includes(o.value)) {
        o.checked = true;
      }
    });
    setOpts(newOpts);
    setSelectorValue(getSelectorValue(newOpts));
  };
  var onOk = function onOk() {
    var _selectRef$current;
    var selectedValue = getSelectedValue(opts);
    if (JSON.stringify(value.sort()) === JSON.stringify(selectedValue.sort())) {
      return;
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(selectedValue);
    (_selectRef$current = selectRef.current) === null || _selectRef$current === void 0 ? void 0 : _selectRef$current.close();
  };
  var renderDropdown = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectDropdownHeader, {
    title: dropdownTitle,
    onClick: function onClick() {
      var _selectRef$current2;
      return (_selectRef$current2 = selectRef.current) === null || _selectRef$current2 === void 0 ? void 0 : _selectRef$current2.close();
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: dropdownMaxHeight,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(SelectButtonGroup, {
    clearAll: clearAll,
    onClearAll: onClearAll,
    selectAll: selectAll,
    onSelectAll: onSelectAll
  }), /*#__PURE__*/React.createElement(Divider, {
    fullLength: true,
    gap: 0,
    color: "#eee"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 10,
      paddingBottom: 10
    }
  }, opts.map(function (item) {
    var selectedValue = getSelectedValue(opts);
    var minCountNotAllowed = selectedValue.length === minCount && selectedValue.includes(item.value);
    var maxCountNotAllowed = selectedValue.length === maxCount && !selectedValue.includes(item.value);
    return /*#__PURE__*/React.createElement(SelectOption, {
      key: item.value,
      labelStyle: dropdownLabelStyle,
      labelClassName: labelClassName,
      value: item.checked,
      onChange: function onChange(checked) {
        return onClick(checked, item);
      },
      disabled: minCountNotAllowed || maxCountNotAllowed || item.disabled,
      boxVisible: true
    }, item.label);
  }))), /*#__PURE__*/React.createElement(SelectOkButton, {
    onClick: onOk
  }));
  return /*#__PURE__*/React.createElement(BaseSelect, _extends({
    ref: selectRef,
    style: style,
    className: className,
    disabled: disabled,
    label: label,
    selectorValue: selectorValue,
    placeholder: placeholder,
    renderDropdown: renderDropdown,
    dropdownStyle: dropdownSty,
    dropdownClassName: dropdownClassName,
    onClickAway: onOk
  }, props));
};