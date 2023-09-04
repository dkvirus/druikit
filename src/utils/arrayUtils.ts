/**
 * 获取数组最后一个元素
 */
export function last(arr: any[]) {
  if (arr.length === 0) return undefined;
  return arr[arr.length - 1];
}

/**
 * 求交集, 共同的部分
 */
export function intersection(a1: string[], a2: string[]) {
  return a1.filter((item) => a2.includes(item));
}

/**
 * a1 对 a2 的差集, 即返回元素在 a1 中但不在 a2 中
 *
 * ```
 * a1 = ['a', 'b', 'c']
 * a2 = ['a', 'd']
 * difference(a1, a2)  // => ['b', 'c']
 * ```
 */
export function difference(a1: string[], a2: string[]) {
  const result = a1.filter((item) => !a2.includes(item));
  return result;
}

/**
 * 一维数组转二维数组
 */
export function chunk(arr: any[], len: number) {
  if (len < 1) return arr;
  const arrLen = arr.length;
  let result: any[] = [];
  for (let i = 0; i < arrLen; i += len) {
    result.push(arr.slice(i, i + len));
  }
  return result;
}

/**
 * 简单数据类型去重
 */
export function uniq(arr: any[]) {
  return Array.from(new Set(arr));
}

export const arrayUtils = {
  last,
  intersection,
  difference,
  chunk,
  uniq,
};
