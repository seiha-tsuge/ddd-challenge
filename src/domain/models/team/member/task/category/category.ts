import { ValueObject } from '@/domain/models/shared/value-object';

type CategoryValue = string;

export class Category extends ValueObject<CategoryValue, 'Category'> {
  constructor(value: CategoryValue) {
    super(value);
    this.validate(value);
  }

  protected validate(value: CategoryValue): void {
    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new Error('Category value cannot be empty');
    }
  }

  get value(): CategoryValue {
    return this._value;
  }
}
