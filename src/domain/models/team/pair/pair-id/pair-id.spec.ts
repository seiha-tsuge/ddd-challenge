import { PairId } from './pair-id';
import { nanoid } from 'nanoid';

describe('PairId', () => {
  it('有効なPairIdでPairIdを作成できる', () => {
    const validId = nanoid();
    const pairId = new PairId(validId);
    expect(pairId.value).toEqual(validId);
  });

  it('無効なPairIdでエラーがスローされる（無効な文字列）', () => {
    expect(() => new PairId('invalid-id')).toThrow('無効なPairIdです');
  });

  it('等価性のテスト（同じPairId）', () => {
    const id = nanoid();
    const pairId1 = new PairId(id);
    const pairId2 = new PairId(id);
    expect(pairId1.equals(pairId2)).toBe(true);
  });

  it('等価性のテスト（異なるPairId）', () => {
    const id1 = nanoid();
    const id2 = nanoid();
    const pairId1 = new PairId(id1);
    const pairId2 = new PairId(id2);
    expect(pairId1.equals(pairId2)).toBe(false);
  });
});
