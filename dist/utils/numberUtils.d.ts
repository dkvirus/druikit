/**
 * 是否是字符串类型的数值
 */
export declare function isNumberOfStringType(value: any): boolean;
/**
 * 生成随机整数
 */
export declare function randint(start?: number, stop?: number): number;
/**
 * 生成随机小数
 */
export declare function randfloat(start?: number, stop?: number, fractionDigits?: number): number;
export declare const numberUtils: {
    isNumberOfStringType: typeof isNumberOfStringType;
    randint: typeof randint;
    randfloat: typeof randfloat;
};
