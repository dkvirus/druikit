/**
 * 是否是字符串类型的数值
 */
export function isNumberOfStringType(value: any): boolean {
  return String(Number(value)) !== 'NaN' && value !== null;
}

/**
 * 是否是数值
 */
export function isNumber(value: any): boolean {
  return typeof value === 'number';
}

/**
 * 是否是整数
 */
export function isInt(value: any): boolean {
  return typeof value === 'number' && !String(value).includes('.');
}

/**
 * 是否是小数
 */
export function isFloat(value: any): boolean {
  return typeof value === 'number' && String(value).includes('.');
}

/**
 * 生成随机整数
 */
export function randint(start = 0, stop = 100) {
  const num = randfloat(start, stop, 0);
  return num;
}

/**
 * 生成随机小数
 */
export function randfloat(start = 0, stop = 100, fractionDigits?: number) {
  const max = Math.max(start, stop);
  const min = Math.min(start, stop);
  let num = Math.random() * (max - min) + min;
  if (typeof fractionDigits === 'number') {
    num = Number(num.toFixed(fractionDigits));
  }
  return num;
}

/**
 * 数值每三位用逗号隔开
 */
export function formatNumberByComma(value: any): string {
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
    const numArr = String(value).split('.');
    numArr[0] = String(numArr[0]).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return numArr.join('.');
  }
}

export const numberUtils = {
  isNumberOfStringType,
  isNumber,
  isInt,
  isFloat,
  formatNumberByComma,
  randint,
  randfloat,
};
