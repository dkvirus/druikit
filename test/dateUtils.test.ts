import { dateUtils } from '../src/utils/dateUtils';

describe('测试 dateUtils', () => {
  test('测试 format()', () => {
    expect(dateUtils.format(new Date('2023-06-06')).year).toEqual('2023');
    expect(dateUtils.format(new Date('2023-06-06')).month).toEqual('06');
    expect(dateUtils.format(new Date('2023-06-06')).day).toEqual('06');
    expect(dateUtils.format(new Date('2023-06-06')).week).toEqual('周四');
    expect(dateUtils.format(new Date('2023-06-06')).hour).toEqual('08');
    expect(dateUtils.format(new Date('2023-06-06')).minute).toEqual('00');
    expect(dateUtils.format(new Date('2023-06-06')).second).toEqual('00');
    expect(dateUtils.format(new Date('2023-06-06')).millisecond).toEqual('000');
    expect(dateUtils.format(new Date('2023-06-06')).ymd).toEqual('2023-06-06');
    expect(dateUtils.format(new Date('2023-06-06')).hms).toEqual('08:00:00');
    expect(dateUtils.format(new Date('2023-06-06')).ymdhms).toEqual(
      '2023-06-06 08:00:00',
    );
    expect(dateUtils.format(new Date('2023-06-06')).ymdhmss).toEqual(
      '2023-06-06 08:00:00.000',
    );
  });

  test('测试 getDaysInMonth()', () => {
    expect(dateUtils.getDaysInMonth(new Date('2023-06-08'))).toEqual(30);
  });

  test('测试 getRange()', () => {
    const startDate = new Date('2023-05-30');
    const endDate = new Date('2023-06-01');
    const result = ['2023-05-30', '2023-05-31', '2023-06-01'];
    expect(dateUtils.range(startDate, endDate)).toEqual(result);
  });
});
