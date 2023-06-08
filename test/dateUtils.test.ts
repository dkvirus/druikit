import { dateUtils } from '../src/utils/dateUtils';

describe('测试 dateUtils', () => {
  test('测试 getDaysInMonth()', () => {
    expect(dateUtils.getDaysInMonth(new Date('2023-06-08'))).toEqual(30);
  });

  test('测试 getRange()', () => {
    const startDate = new Date('2023-05-30');
    const endDate = new Date('2023-06-01');
    const result = ['2023-05-30', '2023-05-31', '2023-06-01'];
    expect(dateUtils.getRange(startDate, endDate)).toEqual(result);
  });
});
