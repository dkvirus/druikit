/**
 * 是否是字符串类型的数值
 */
export function isNumberOfStringType(value: any): boolean {
  return String(Number(value)) !== 'NaN' && value !== null;
}

export const numberUtils = {
  isNumberOfStringType,
};
