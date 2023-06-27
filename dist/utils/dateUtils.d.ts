/**
 * 获取某一个月份总共有多少天
 * month: 1 - 12
 */
export declare function getDaysInMonth(date: Date): number;
/**
 * 根据开始日期和结束日期补全中间日期, 获取日期范围
 */
export declare function range(startDate: Date, endDate: Date): string[];
/**
 * 格式化日期
 */
export declare function format(d: Date, opt?: {
    separator?: string;
}): {
    year: string;
    month: string;
    day: string;
    week: string;
    hour: string;
    minute: string;
    second: string;
    millisecond: string;
    ymd: string;
    hms: string;
    ymdhms: string;
    ymdhmss: string;
};
export declare const dateUtils: {
    WEEKS: string[];
    WEEKS_ABBR: string[];
    WEEKS_ZH: string[];
    MONTHS: string[];
    MONTHS_ABBR: string[];
    MONTHS_ZH: string[];
    getDaysInMonth: typeof getDaysInMonth;
    range: typeof range;
    format: typeof format;
};
