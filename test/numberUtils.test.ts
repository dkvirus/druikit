import { numberUtils } from '../src/utils/numberUtils';

describe('测试 numberUtils', () => {
  test('测试 randint()', () => {
    expect(numberUtils.randint()).toBeLessThan(100);
  });
});
