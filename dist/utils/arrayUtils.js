/**
 * 获取数组最后一个元素
 */
export function last(arr) {
  if (arr.length === 0) return undefined;
  return arr[arr.length - 1];
}

/**
 * 求交集, 共同的部分
 */
export function intersection(a1, a2) {
  return a1.filter(function (item) {
    return a2.includes(item);
  });
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
export function difference(a1, a2) {
  var result = a1.filter(function (item) {
    return !a2.includes(item);
  });
  return result;
}

/**
 * 一维数组转二维数组
 */
export function chunk(arr, len) {
  if (len < 1) return arr;
  var arrLen = arr.length;
  var result = [];
  for (var i = 0; i < arrLen; i += len) {
    result.push(arr.slice(i, i + len));
  }
  return result;
}

/**
 * 简单数据类型去重
 */
export function uniq(arr) {
  return Array.from(new Set(arr));
}
export var arrayUtils = {
  last: last,
  intersection: intersection,
  difference: difference,
  chunk: chunk,
  uniq: uniq
};