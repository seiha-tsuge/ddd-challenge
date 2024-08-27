import { ValueObject } from '@/domain/models/shared/value-object';

type TaskIdValue = string;

export class TaskId extends ValueObject<TaskIdValue, 'TaskId'> {
  constructor(value: TaskIdValue) {
    super(value);
  }

  protected validate(value: TaskIdValue): void {
    const nanoidRegex = /^[\w-]{21}$/;
    if (!nanoidRegex.test(value)) {
      throw new Error('Invalid Task ID');
    }
  }

  get value(): TaskIdValue {
    return this._value;
  }
}
