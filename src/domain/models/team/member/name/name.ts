import { ValueObject } from '@/domain/models/shared/value-object';

type NameValue = string;

export class Name extends ValueObject<NameValue, 'Name'> {
  constructor(value: NameValue) {
    super(value);
    this.validate(value);
  }

  protected validate(value: NameValue): void {
    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new Error('無効なNameです');
    }
  }

  get value(): NameValue {
    return this._value;
  }
}
