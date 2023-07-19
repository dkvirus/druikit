/**
 * 是否是字符串类型的数值
 */
export function isNumberOfStringType(value) {
  return String(Number(value)) !== 'NaN' && value !== null;
}

/**
 * 是否是数值
 */
export function isNumber(value) {
  return typeof value === 'number';
}

/**
 * 是否是整数
 */
export function isInt(value) {
  return typeof value === 'number' && !String(value).includes('.');
}

/**
 * 是否是小数
 */
export function isFloat(value) {
  return typeof value === 'number' && String(value).includes('.');
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

/**
 * 数值每三位用逗号隔开
 */
export function formatNumberByComma(value) {
  if (typeof value !== 'string' && typeof value !== 'number') {
    return '';
  } else if (!isNumberOfStringType(String(value))) {
    return String(value);
  } else if (isInt(Number(value))) {
    // 整数
    return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    // 小数
    // numArr[0] 整数   numArr[1] 小数
    var numArr = String(value).split('.');
    numArr[0] = String(numArr[0]).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return numArr.join('.');
  }
}
export var numberUtils = {
  isNumberOfStringType: isNumberOfStringType,
  isNumber: isNumber,
  isInt: isInt,
  isFloat: isFloat,
  formatNumberByComma: formatNumberByComma,
  randint: randint,
  randfloat: randfloat
};