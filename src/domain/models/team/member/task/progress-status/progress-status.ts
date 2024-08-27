import { ValueObject } from '@/domain/models/shared/value-object';

type ProgressStatusValue = 'NotStarted' | 'ReviewPending' | 'Completed';

export class ProgressStatus extends ValueObject<
  ProgressStatusValue,
  'ProgressStatus'
> {
  constructor(value: ProgressStatusValue) {
    super(value);
  }

  protected validate(value: ProgressStatusValue): void {
    const validStatuses: ProgressStatusValue[] = [
      'NotStarted',
      'ReviewPending',
      'Completed',
    ];
    if (!validStatuses.includes(value)) {
      throw new Error('Invalid progress status');
    }

    // If the status is 'Completed', it cannot be changed back to 'ReviewPending' or 'NotStarted'
    if (
      this._value === 'Completed' &&
      (value === 'ReviewPending' || value === 'NotStarted')
    ) {
      throw new Error(
        'Cannot change status back from Completed to ReviewPending or NotStarted',
      );
    }
  }

  get value(): ProgressStatusValue {
    return this._value;
  }

  changeStatus(newValue: ProgressStatusValue): ProgressStatus {
    this.validate(newValue);
    return new ProgressStatus(newValue);
  }
}
