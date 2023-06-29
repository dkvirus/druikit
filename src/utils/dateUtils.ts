export const WEEKS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
export const WEEKS_ABBR = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
export const WEEKS_ZH = [
  '周一',
  '周二',
  '周三',
  '周四',
  '周五',
  '周六',
  '周日',
];

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const MONTHS_ABBR = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
export const MONTHS_ZH = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月',
];

/**
 * 获取某一个月份总共有多少天
 * month: 1 - 12
 */
export function getDaysInMonth(date: Date): number {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  if (month === 2) {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    return isLeapYear ? 29 : 28;
  }
  const daysInMonth = [31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return daysInMonth[month - 1];
}

/**
 * 根据开始日期和结束日期补全中间日期, 获取日期范围
 */
export function range(startDate: Date, endDate: Date): string[] {
  const startTime = new Date(format(startDate).ymd).getTime();
  const endTime = new Date(format(endDate).ymd).getTime();
  const millisecondInDay = 1000 * 60 * 60 * 24;
  let time = startTime;
  const result = [];
  while (time <= endTime) {
    result.push(format(new Date(time)).ymd);
    time += millisecondInDay;
  }
  return result;
}

/**
 * 格式化日期
 */
export function format(d: Date, opt?: { separator?: string }) {
  const separator = opt?.separator || '-';
  const year = String(d.getFullYear());
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hour = String(d.getHours()).padStart(2, '0');
  const minute = String(d.getMinutes()).padStart(2, '0');
  const second = String(d.getSeconds()).padStart(2, '0');
  const millisecond = String(d.getMilliseconds()).padStart(3, '0');
  const week = WEEKS_ZH[d.getDay() + 1];
  const ymd = `${year}${separator}${String(month).padStart(
    2,
    '0',
  )}${separator}${String(day).padStart(2, '0')}`;
  const hms = `${String(hour).padStart(2, '0')}:${String(minute).padStart(
    2,
    '0',
  )}:${String(second).padStart(2, '0')}`;
  const ymdhms = `${ymd} ${hms}`;
  const ymdhmss = `${ymdhms}.${millisecond}`;
  return {
    year,
    month,
    day,
    week,
    hour,
    minute,
    second,
    millisecond,
    ymd,
    hms,
    ymdhms,
    ymdhmss,
  };
}

export const dateUtils = {
  WEEKS,
  WEEKS_ABBR,
  WEEKS_ZH,
  MONTHS,
  MONTHS_ABBR,
  MONTHS_ZH,
  getDaysInMonth,
  range,
  format,
};
