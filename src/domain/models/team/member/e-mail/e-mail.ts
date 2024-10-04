import { ValueObject } from '@/domain/models/shared/value-object';

export type EmailValue = string;

export class Email extends ValueObject<EmailValue, 'Email'> {
  constructor(value: EmailValue) {
    super(value);
    this.validate(value);
  }

  protected validate(email: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('無効なEmail形式です');
    }
  }

  get value(): string {
    return this._value;
  }
}
