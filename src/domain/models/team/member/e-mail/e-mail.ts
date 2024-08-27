import { ValueObject } from '@/domain/models/shared/value-object';

type EmailValue = string;

export class Email extends ValueObject<EmailValue, 'Email'> {
  constructor(value: string) {
    super(value);
  }

  protected validate(email: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }
  }

  get value(): string {
    return this._value;
  }
}
