import { ValueObject } from '@/domain/models/shared/value-object';

type PairNameValue = string;

export class PairName extends ValueObject<PairNameValue, 'PairName'> {
  constructor(value: PairNameValue) {
    super(value);
    this.validate(value);
  }

  protected validate(value: PairNameValue): void {
    if (typeof value !== 'string' || !/^[a-zA-Z]$/.test(value)) {
      throw new Error('無効なPairNameです。PairNameは英文字（a, b, c, d, eなど）で1文字でなければなりません。');
    }
  }

  get value(): PairNameValue {
    return this._value;
  }
}
