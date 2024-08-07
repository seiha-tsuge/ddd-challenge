import { ValueObject } from '../../../shared/value-object';

type EnrollmentStatusValue = 'Active' | 'OnLeave' | 'Withdrawn';

export class EnrollmentStatus extends ValueObject<
  EnrollmentStatusValue,
  'EnrollmentStatus'
> {
  constructor(value: EnrollmentStatusValue) {
    super(value);
  }

  protected validate(value: EnrollmentStatusValue): void {
    const validStatuses = ['Active', 'OnLeave', 'Withdrawn'];
    if (!validStatuses.includes(value)) {
      throw new Error('Invalid enrollment status');
    }
  }

  get value(): EnrollmentStatusValue {
    return this._value;
  }
}
