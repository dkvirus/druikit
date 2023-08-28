function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["style", "className", "value", "onChange", "disabled", "options", "size", "label", "labelStyle", "labelClassName", "placeholder", "dropdownTitle", "dropdownStyle", "dropdownClassName", "dropdownLabelStyle", "dropdownLabelClassName", "showSearch"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
import SelectOption, { SelectDropdownHeader } from "../SelectOption";
var getSelectorValue = function getSelectorValue(value, options) {
  var _options$find;
  if (!value) return '';
  return ((_options$find = options.find(function (item) {
    return item.value === value;
  })) === null || _options$find === void 0 ? void 0 : _options$find.label) || '';
};
var Select = function Select(_ref) {
  var style = _ref.style,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    _onChange = _ref.onChange,
    disabled = _ref.disabled,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'middle' : _ref$size,
    label = _ref.label,
    labelStyle = _ref.labelStyle,
    labelClassName = _ref.labelClassName,
    placeholder = _ref.placeholder,
    dropdownTitle = _ref.dropdownTitle,
    dropdownStyle = _ref.dropdownStyle,
    dropdownClassName = _ref.dropdownClassName,
    dropdownLabelStyle = _ref.dropdownLabelStyle,
    dropdownLabelClassName = _ref.dropdownLabelClassName,
    _ref$showSearch = _ref.showSearch,
    showSearch = _ref$showSearch === void 0 ? false : _ref$showSearch,
    props = _objectWithoutProperties(_ref, _excluded);
  var selectRef = useRef(null);
  var _useState = useState(getSelectorValue(value, options)),
    _useState2 = _slicedToArray(_useState, 2),
    selectorValue = _useState2[0],
    setSelectorValue = _useState2[1];
  useEffect(function () {
    if (!value) return;
    setSelectorValue(getSelectorValue(value, options));
  }, [value, options]);

  /* ************************* dropdown ******************************* */
  var dropdownSty = _objectSpread({
    padding: 0,
    minWidth: 164
  }, dropdownStyle);
  var dropdownLabelSty = _objectSpread({
    width: 'fit-content',
    whiteSpace: 'nowrap'
  }, dropdownLabelStyle);

  // 下拉弹窗 (dropdown) 中搜索框填写值
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    searchValue = _useState4[0],
    setSearchValue = _useState4[1];
  // 下拉框选项列表
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    dropdownOptions = _useState6[0],
    setDropdownOptions = _useState6[1];
  useEffect(function () {
    setDropdownOptions(options || []);
  }, [options]);
  useEffect(function () {
    if (!searchValue) {
      setDropdownOptions(_toConsumableArray(options));
    } else {
      var filterOptions = options.filter(function (item) {
        return item.label.toLowerCase().indexOf(searchValue.trim().toLowerCase()) !== -1;
      });
      setDropdownOptions(_toConsumableArray(filterOptions));
    }
  }, [searchValue]);
  var searchEl = null;
  if (showSearch) {
    searchEl = /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 15px 0px'
      }
    }, /*#__PURE__*/React.createElement("input", {
      style: {
        outline: 'none',
        border: '1px solid #d9d9d9',
        borderRadius: 4,
        padding: '4px 6px',
        width: '100%',
        color: '#666',
        fontSize: 12
      },
      placeholder: "Search",
      value: searchValue,
      onChange: function onChange(e) {
        return setSearchValue(e.target.value);
      }
    }));
  }
  var renderDropdown = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectDropdownHeader, {
    title: dropdownTitle
  }), searchEl, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 10,
      paddingBottom: 10
    }
  }, dropdownOptions.map(function (item, index) {
    var key = item.label + index.toString();
    if (typeof item.value === 'string') {
      return /*#__PURE__*/React.createElement(SelectOption, {
        key: key,
        labelStyle: dropdownLabelSty,
        labelClassName: dropdownLabelClassName,
        value: item.value === value,
        disabled: item.disabled,
        onChange: function onChange(value) {
          if (disabled) return;
          if (value === true) {
            var _selectRef$current;
            setSelectorValue(item.label);
            (_selectRef$current = selectRef.current) === null || _selectRef$current === void 0 ? void 0 : _selectRef$current.close();
            _onChange === null || _onChange === void 0 ? void 0 : _onChange(item.value);
          }
        }
      }, item.label);
    }
    return /*#__PURE__*/React.createElement(SelectOption, {
      key: key,
      groupTitle: true,
      labelClassName: item.labelClassName
    }, item.label);
  })));
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
    dropdownClassName: dropdownClassName
  }, props));
};
export default Select;