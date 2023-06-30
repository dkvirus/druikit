export function getFontSize(_ref) {
  var fontSize = _ref.fontSize,
    fontSize32 = _ref.fontSize32,
    fontSize16 = _ref.fontSize16,
    fontSize14 = _ref.fontSize14,
    fontSize12 = _ref.fontSize12;
  var sty = {};
  if (typeof fontSize === 'number') {
    sty.fontSize = fontSize;
  }
  if (fontSize32) {
    sty.fontSize = 32;
  }
  if (fontSize16) {
    sty.fontSize = 16;
  }
  if (fontSize14) {
    sty.fontSize = 14;
  }
  if (fontSize12) {
    sty.fontSize = 12;
  }
  return sty;
}
export function getFontWeight(_ref2) {
  var fontWeight = _ref2.fontWeight,
    bold = _ref2.bold,
    bolder = _ref2.bolder;
  var sty = {};
  if (fontWeight) {
    sty.fontWeight = fontWeight;
  }
  if (bold) {
    sty.fontWeight = 'bold';
  }
  if (bolder) {
    sty.fontWeight = 'bolder';
  }
  return sty;
}
export function getColor(_ref3) {
  var color = _ref3.color,
    color333 = _ref3.color333,
    color666 = _ref3.color666,
    color999 = _ref3.color999,
    colorBlue = _ref3.colorBlue,
    colorRed = _ref3.colorRed;
  var sty = {};
  if (typeof color === 'string') {
    sty.color = color;
  }
  if (color333) {
    sty.color = '#333333';
  }
  if (color666) {
    sty.color = '#666666';
  }
  if (color999) {
    sty.color = '#999999';
  }
  if (colorBlue) {
    sty.color = '#01a699';
  }
  if (colorRed) {
    sty.color = '#d62310';
  }
  return sty;
}
export function getTextTransform(_ref4) {
  var capitalize = _ref4.capitalize,
    uppercase = _ref4.uppercase,
    lowercase = _ref4.lowercase;
  var sty = {};
  if (capitalize) {
    sty.textTransform = 'capitalize';
  }
  if (uppercase) {
    sty.textTransform = 'uppercase';
  }
  if (lowercase) {
    sty.textTransform = 'lowercase';
  }
  return sty;
}