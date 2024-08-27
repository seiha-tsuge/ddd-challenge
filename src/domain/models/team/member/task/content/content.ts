import { ValueObject } from '@/domain/models/shared/value-object';

type ContentValue = string;

export class Content extends ValueObject<ContentValue, 'Content'> {
  constructor(value: ContentValue) {
    super(value);
  }

  protected validate(value: ContentValue): void {
    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new Error('無効なContentです');
    }
  }

  get value(): string {
    return this._value;
  }
}
