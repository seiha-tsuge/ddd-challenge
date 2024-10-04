import { describe, expect, it } from 'vitest';
import { PairName } from './pair-name';

describe('PairName', () => {
  it('有効なPairNameでPairNameを作成できる', () => {
    const validPairName = 'A';
    const pairName = new PairName(validPairName);
    expect(pairName.value).toEqual(validPairName);
  });

  const invalidPairNames = [
    { value: '', description: '空文字列' },
    { value: '   ', description: '空白のみの文字列' },
    { value: 'AB', description: '2文字以上' },
    { value: '1', description: '数字' },
    { value: '@', description: '記号' },
  ];

  for (const { value, description } of invalidPairNames) {
    it(`無効なPairNameでエラーがスローされる (${description})`, () => {
      expect(() => new PairName(value)).toThrow(
        '無効なPairNameです。PairNameは英文字（a, b, c, d, eなど）で1文字でなければなりません。',
      );
    });
  }

  it('等価性のテスト（同じPairName）', () => {
    const pairNameValue = 'B';
    const pairName1 = new PairName(pairNameValue);
    const pairName2 = new PairName(pairNameValue);
    expect(pairName1.equals(pairName2)).toBe(true);
  });

  it('等価性のテスト（異なるPairName）', () => {
    const pairName1 = new PairName('C');
    const pairName2 = new PairName('D');
    expect(pairName1.equals(pairName2)).toBe(false);
  });
});
