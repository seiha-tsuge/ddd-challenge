import { PairId } from './pair-id/pair-id';
import { PairCode } from './pair-code/pair-code';
import { PairName } from './pair-name/pair-name';

export class Pair {
  constructor(
    private readonly _pairId: PairId,
    private readonly _pairCode: PairCode,
    private readonly _pairName: PairName,
  ) {}

  static create(pairId: PairId, pairCode: PairCode, pairName: PairName) {
    return new Pair(pairId, pairCode, pairName);
  }

  get pairId(): PairId {
    return this._pairId;
  }

  get pairCode(): PairCode {
    return this._pairCode;
  }

  get pairName(): PairName {
    return this._pairName;
  }
}
