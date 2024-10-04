import { ValueObject } from '@/domain/models/shared/value-object';

export type EnrollmentStatusValue = 'Active' | 'OnLeave' | 'Withdrawn';

export class EnrollmentStatus extends ValueObject<EnrollmentStatusValue, 'EnrollmentStatus'> {
  constructor(value: EnrollmentStatusValue) {
    super(value);
    this.validate(value);
  }

  protected validate(value: EnrollmentStatusValue): void {
    const validStatuses = ['Active', 'OnLeave', 'Withdrawn'];
    if (!validStatuses.includes(value)) {
      throw new Error('無効なEnrollmentStatusです');
    }
  }

  get value(): EnrollmentStatusValue {
    return this._value;
  }
}
