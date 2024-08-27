import { ValueObject } from '@/domain/models/shared/value-object';

type TitleValue = string;

export class Title extends ValueObject<TitleValue, 'Title'> {
  constructor(value: TitleValue) {
    super(value);
    this.validate(value);
  }

  protected validate(value: TitleValue): void {
    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new Error('Title value cannot be empty');
    }
  }

  get value(): TitleValue {
    return this._value;
  }
}
