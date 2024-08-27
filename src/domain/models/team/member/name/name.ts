import { ValueObject } from '@/domain/models/shared/value-object';

type NameValue = string;

export class Name extends ValueObject<NameValue, 'Name'> {
  constructor(value: NameValue) {
    super(value);
  }

  protected validate(value: NameValue): void {
    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new Error('Invalid name');
    }
  }

  get value(): NameValue {
    return this._value;
  }
}
