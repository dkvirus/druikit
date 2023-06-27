/**
 * 是否是字符串类型的数值
 */
export function isNumberOfStringType(value) {
  return String(Number(value)) !== 'NaN' && value !== null;
}

/**
 * 生成随机整数
 */
export function randint() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var stop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var num = randfloat(start, stop, 0);
  return num;
}

/**
 * 生成随机小数
 */
export function randfloat() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var stop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var fractionDigits = arguments.length > 2 ? arguments[2] : undefined;
  var max = Math.max(start, stop);
  var min = Math.min(start, stop);
  var num = Math.random() * (max - min) + min;
  if (typeof fractionDigits === 'number') {
    num = Number(num.toFixed(fractionDigits));
  }
  return num;
}
export var numberUtils = {
  isNumberOfStringType: isNumberOfStringType,
  randint: randint,
  randfloat: randfloat
};