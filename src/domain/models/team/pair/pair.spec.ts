import { nanoid } from 'nanoid';
import { beforeEach, describe, expect, it } from 'vitest';
import { Pair } from './pair';
import { PairCode } from './pair-code/pair-code';
import { PairId } from './pair-id/pair-id';
import { PairName } from './pair-name/pair-name';

describe('Pairクラスのテスト', () => {
  let pairId: PairId;
  let pairCode: PairCode;
  let pairName: PairName;
  let pair: Pair;

  beforeEach(() => {
    pairId = new PairId(nanoid());
    pairCode = new PairCode('some-pair-code');
    pairName = new PairName('A');
    pair = Pair.create(pairId, pairCode, pairName);
  });

  it('新しいPairインスタンスを作成する', () => {
    expect(pair).toBeInstanceOf(Pair);
  });

  it('pairIdが正しい値を返す', () => {
    expect(pair.pairId).toBe(pairId);
  });

  it('pairCodeが正しい値を返す', () => {
    expect(pair.pairCode).toBe(pairCode);
  });

  it('pairNameが正しい値を返す', () => {
    expect(pair.pairName).toBe(pairName);
  });
});
