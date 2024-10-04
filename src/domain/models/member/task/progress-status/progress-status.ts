import { ValueObject } from '@/domain/models/shared/value-object';

type ProgressStatusValue = 'NotStarted' | 'ReviewPending' | 'Completed';

export class ProgressStatus extends ValueObject<ProgressStatusValue, 'ProgressStatus'> {
  constructor(value: ProgressStatusValue) {
    super(value);
    this.validate(value);
  }

  protected validate(value: ProgressStatusValue): void {
    const validStatuses: ProgressStatusValue[] = ['NotStarted', 'ReviewPending', 'Completed'];
    if (!validStatuses.includes(value)) {
      throw new Error('無効なProgressStatusです');
    }

    if (this._value === 'Completed' && (value === 'ReviewPending' || value === 'NotStarted')) {
      throw new Error('ステータスをCompletedからReviewPendingまたはNotStartedに戻すことはできません');
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
