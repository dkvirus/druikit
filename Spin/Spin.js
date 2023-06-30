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
import React, { useLayoutEffect, useRef, useState } from 'react';
// 定义 LoadingIcon 展示模式
// LoadingMode.flex 容器高度小于浏览器可视窗口高度时，LoadingIcon 垂直水平居中展示
// LoadingMode.sticky 容器高度大于浏览器可视窗口高度时，
var LoadingMode;
(function (LoadingMode) {
  LoadingMode["flex"] = "\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D";
  LoadingMode["sticky"] = "\u7C98\u6027\u5B9A\u4F4D";
})(LoadingMode || (LoadingMode = {}));
export var Spin = function Spin(_ref) {
  var style = _ref.style,
    className = _ref.className,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? null : _ref$children,
    _ref$spinning = _ref.spinning,
    spinning = _ref$spinning === void 0 ? true : _ref$spinning,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'default' : _ref$size,
    _ref$maskStyle = _ref.maskStyle,
    maskStyle = _ref$maskStyle === void 0 ? {} : _ref$maskStyle,
    _ref$zIndex = _ref.zIndex,
    zIndex = _ref$zIndex === void 0 ? 101 : _ref$zIndex,
    _ref$minHeight = _ref.minHeight,
    minHeight = _ref$minHeight === void 0 ? 300 : _ref$minHeight;
  // spinWrap 默认样式
  var sty = {
    minHeight: minHeight,
    position: 'relative'
  };

  // LoadingIcon 根据该变量值进行展示
  var _useState = useState(LoadingMode.flex),
    _useState2 = _slicedToArray(_useState, 2),
    loadingMode = _useState2[0],
    setLoadingMode = _useState2[1];
  // 容器 div，主要为了获取容器高度
  var divRef = useRef(null);

  // 计算 loadingMode 值
  useLayoutEffect(function () {
    if (!divRef.current) return;
    // 容器高度
    var _divRef$current$getBo = divRef.current.getBoundingClientRect(),
      height = _divRef$current$getBo.height;

    // 浏览器可视窗口高度
    var bodyEleHeight = window.innerHeight;
    if (height <= bodyEleHeight) {
      setLoadingMode(LoadingMode.flex);
    } else {
      setLoadingMode(LoadingMode.sticky);
    }
  }, [children, LoadingMode.flex, LoadingMode.sticky]);

  /* ***************************** contentEl ******************************* */
  var sizeObj = {
    small: 30,
    default: 40,
    large: 50
  };
  var contentEl = null;
  var iconEl = /*#__PURE__*/React.createElement(LoadingIcon, {
    size: sizeObj[size]
  });
  var maskSty = {
    zIndex: zIndex,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,.8)'
  };
  var maskFlexSty = _objectSpread(_objectSpread({}, maskSty), {}, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  });
  var maskStickySty = {
    textAlign: 'center',
    position: 'sticky',
    top: 200,
    padding: '100px 0'
  };
  if (loadingMode === LoadingMode.flex) {
    contentEl = /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, maskFlexSty), maskStyle)
    }, iconEl);
  } else {
    contentEl = /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, maskSty), maskStyle)
    }, /*#__PURE__*/React.createElement("div", {
      style: _objectSpread({}, maskStickySty)
    }, iconEl));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: _objectSpread(_objectSpread({}, sty), style),
    ref: divRef,
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    }
  }, children, spinning && contentEl);
};
var LoadingIcon = function LoadingIcon(_ref2) {
  var size = _ref2.size;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 135 135",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#DE183D"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 67 67",
    to: "-360 67 67",
    dur: "2.5s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 67 67",
    to: "360 67 67",
    dur: "8s",
    repeatCount: "indefinite"
  })));
};