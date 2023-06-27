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

export const arrayUtils = {
  last,
  intersection,
  difference,
};
