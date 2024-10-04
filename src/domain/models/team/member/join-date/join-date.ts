import { ValueObject } from '@/domain/models/shared/value-object';

export type JoinDateValue = Date;

export class JoinDate extends ValueObject<JoinDateValue, 'JoinDate'> {
  constructor(value: JoinDateValue) {
    super(value);
    this.validate(value);
  }

  protected validate(value: JoinDateValue): void {
    if (!(value instanceof Date) || Number.isNaN(value.getTime())) {
      throw new Error('無効なJoinDateです');
    }
  }

  get value(): JoinDateValue {
    return this._value;
  }
}
