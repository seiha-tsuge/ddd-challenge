import { ValueObject } from '@/domain/models/shared/value-object';

type PairCodeValue = string;

export class PairCode extends ValueObject<PairCodeValue, 'PairCode'> {
  constructor(value: PairCodeValue) {
    super(value);
    this.validate(value);
  }

  protected validate(value: PairCodeValue): void {
    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new Error('無効なPairCodeです');
    }
  }

  get value(): PairCodeValue {
    return this._value;
  }
}
