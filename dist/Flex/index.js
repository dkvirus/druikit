function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
import React, { forwardRef } from 'react';
import Box from "../Box";
export var Flex1 = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var props = Object.assign({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref,
    flexGrow: 1
  }, props));
});
var Flex = /*#__PURE__*/forwardRef(function (_ref2, ref) {
  var props = Object.assign({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref,
    display: "flex"
  }, props));
});
export default Flex;