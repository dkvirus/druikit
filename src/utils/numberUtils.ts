/**
 * 是否是字符串类型的数值
 */
export function isNumberOfStringType(value: any): boolean {
  return String(Number(value)) !== 'NaN' && value !== null;
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

export const numberUtils = {
  isNumberOfStringType,
  randint,
  randfloat,
};
