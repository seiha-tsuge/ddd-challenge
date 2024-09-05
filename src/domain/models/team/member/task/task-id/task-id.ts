import { ValueObject } from '@/domain/models/shared/value-object';

type TaskIdValue = string;

export class TaskId extends ValueObject<TaskIdValue, 'TaskId'> {
  constructor(value: TaskIdValue) {
    super(value);
    this.validate(value);
  }

  protected validate(value: TaskIdValue): void {
    const nanoidRegex = /^[\w-]{21}$/;
    if (!nanoidRegex.test(value)) {
      throw new Error('無効なTaskIdです');
    }
  }

  get value(): TaskIdValue {
    return this._value;
  }
}
