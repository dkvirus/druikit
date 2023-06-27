var WEEKS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var WEEKS_ABBR = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
var WEEKS_ZH = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var MONTHS_ABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var MONTHS_ZH = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

/**
 * 获取某一个月份总共有多少天
 * month: 1 - 12
 */
export function getDaysInMonth(date) {
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  if (month === 2) {
    var isLeapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    return isLeapYear ? 29 : 28;
  }
  var daysInMonth = [31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return daysInMonth[month - 1];
}

/**
 * 根据开始日期和结束日期补全中间日期, 获取日期范围
 */
export function range(startDate, endDate) {
  var startTime = new Date(format(startDate).ymd).getTime();
  var endTime = new Date(format(endDate).ymd).getTime();
  var millisecondInDay = 1000 * 60 * 60 * 24;
  var time = startTime;
  var result = [];
  while (time <= endTime) {
    result.push(format(new Date(time)).ymd);
    time += millisecondInDay;
  }
  return result;
}

/**
 * 格式化日期
 */
export function format(d, opt) {
  var separator = (opt === null || opt === void 0 ? void 0 : opt.separator) || '-';
  var year = String(d.getFullYear());
  var month = String(d.getMonth() + 1).padStart(2, '0');
  var day = String(d.getDate()).padStart(2, '0');
  var hour = String(d.getHours()).padStart(2, '0');
  var minute = String(d.getMinutes()).padStart(2, '0');
  var second = String(d.getSeconds()).padStart(2, '0');
  var millisecond = String(d.getMilliseconds()).padStart(3, '0');
  var week = WEEKS_ZH[d.getDay() + 1];
  var ymd = "".concat(year).concat(separator).concat(String(month).padStart(2, '0')).concat(separator).concat(String(day).padStart(2, '0'));
  var hms = "".concat(String(hour).padStart(2, '0'), ":").concat(String(minute).padStart(2, '0'), ":").concat(String(second).padStart(2, '0'));
  var ymdhms = "".concat(ymd, " ").concat(hms);
  var ymdhmss = "".concat(ymdhms, ".").concat(millisecond);
  return {
    year: year,
    month: month,
    day: day,
    week: week,
    hour: hour,
    minute: minute,
    second: second,
    millisecond: millisecond,
    ymd: ymd,
    hms: hms,
    ymdhms: ymdhms,
    ymdhmss: ymdhmss
  };
}
export var dateUtils = {
  WEEKS: WEEKS,
  WEEKS_ABBR: WEEKS_ABBR,
  WEEKS_ZH: WEEKS_ZH,
  MONTHS: MONTHS,
  MONTHS_ABBR: MONTHS_ABBR,
  MONTHS_ZH: MONTHS_ZH,
  getDaysInMonth: getDaysInMonth,
  range: range,
  format: format
};