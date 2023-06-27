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
export function getColor(_ref2) {
  var color = _ref2.color,
    color666 = _ref2.color666,
    colorBlue = _ref2.colorBlue,
    colorRed = _ref2.colorRed;
  var sty = {};
  if (typeof color === 'string') {
    sty.color = color;
  }
  if (color666) {
    sty.color = '#666666';
  }
  if (colorBlue) {
    sty.color = '#01a699';
  }
  if (colorRed) {
    sty.color = '#d62310';
  }
  return sty;
}
export function getTextTransform(_ref3) {
  var capitalize = _ref3.capitalize,
    uppercase = _ref3.uppercase,
    lowercase = _ref3.lowercase;
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