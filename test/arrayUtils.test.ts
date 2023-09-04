import { arrayUtils } from '../src/utils/arrayUtils';

describe('测试 arrayUtils', () => {
  test('测试 chunk(), len 小于数组长度', () => {
    expect(arrayUtils.chunk([1, 2, 3, 4, 5, 6, 7], 3)).toMatchObject([
      [1, 2, 3],
      [4, 5, 6],
      [7],
    ]);
  });

  test('测试 chunk(), len 小于1', () => {
    expect(arrayUtils.chunk([1, 2, 3, 4, 5, 6, 7], 0)).toMatchObject([
      1, 2, 3, 4, 5, 6, 7,
    ]);
  });

  test('测试 chunk(), len 大于数组长度', () => {
    expect(arrayUtils.chunk([1, 2, 3, 4, 5, 6, 7], 10)).toMatchObject([
      [1, 2, 3, 4, 5, 6, 7],
    ]);
  });

  test('测试 uniq(), 简单数据类型去重', () => {
    expect(
      arrayUtils.uniq([
        1,
        2,
        1,
        2,
        'a',
        'b',
        'a',
        false,
        true,
        false,
        null,
        undefined,
        null,
        undefined,
      ]),
    ).toMatchObject([1, 2, 'a', 'b', false, true, null, undefined]);
  });
});
