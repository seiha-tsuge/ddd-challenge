import { PairCode } from './pair-code';

describe('PairCode', () => {
  it('有効なPairCodeでPairCodeを作成できる', () => {
    const validPairCode = 'John Doe';
    const pairCode = new PairCode(validPairCode);
    expect(pairCode.value).toEqual(validPairCode);
  });

  it('無効なPairCodeでエラーがスローされる（空文字列）', () => {
    expect(() => new PairCode('')).toThrow('無効なPairCodeです');
  });

  it('無効なPairCodeでエラーがスローされる（空白のみの文字列）', () => {
    expect(() => new PairCode('   ')).toThrow('無効なPairCodeです');
  });

  it('等価性のテスト（同じPairCode）', () => {
    const pairCodeValue = 'John Doe';
    const pairCode1 = new PairCode(pairCodeValue);
    const pairCode2 = new PairCode(pairCodeValue);
    expect(pairCode1.equals(pairCode2)).toBe(true);
  });

  it('等価性のテスト（異なるPairCode）', () => {
    const pairCode1 = new PairCode('John Doe');
    const pairCode2 = new PairCode('Jane Doe');
    expect(pairCode1.equals(pairCode2)).toBe(false);
  });
});
