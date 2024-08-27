import { ValueObject } from '@/domain/models/shared/value-object';

type JoinDateValue = Date;

export class JoinDate extends ValueObject<JoinDateValue, 'JoinDate'> {
  constructor(value: JoinDateValue) {
    super(value);
  }

  protected validate(value: JoinDateValue): void {
    if (!(value instanceof Date) || isNaN(value.getTime())) {
      throw new Error('Invalid date');
    }
  }

  get value(): JoinDateValue {
    return this._value;
  }
}
