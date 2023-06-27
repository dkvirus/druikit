/**
 * 获取数组最后一个元素
 */
export declare function last(arr: any[]): any;
/**
 * 求交集, 共同的部分
 */
export declare function intersection(a1: string[], a2: string[]): string[];
/**
 * a1 对 a2 的差集, 即返回元素在 a1 中但不在 a2 中
 *
 * ```
 * a1 = ['a', 'b', 'c']
 * a2 = ['a', 'd']
 * difference(a1, a2)  // => ['b', 'c']
 * ```
 */
export declare function difference(a1: string[], a2: string[]): string[];
export declare const arrayUtils: {
    last: typeof last;
    intersection: typeof intersection;
    difference: typeof difference;
};
