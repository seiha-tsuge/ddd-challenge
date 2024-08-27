import { ValueObject } from '@/domain/models/shared/value-object';

type PairIdValue = string;

export class PairId extends ValueObject<PairIdValue, 'PairId'> {
  constructor(value: PairIdValue) {
    super(value);
  }

  protected validate(value: PairIdValue): void {
    const nanoidRegex = /^[\w-]{21}$/;
    if (!nanoidRegex.test(value)) {
      throw new Error('無効なPairIdです');
    }
  }

  get value(): PairIdValue {
    return this._value;
  }
}
