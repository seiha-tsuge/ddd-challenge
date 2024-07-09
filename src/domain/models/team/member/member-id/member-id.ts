import { ValueObject } from '../../../shared/value-object';

type MemberIdValue = string;

export class MemberId extends ValueObject<MemberIdValue, 'MemberId'> {
  constructor(value: MemberIdValue) {
    super(value);
  }

  protected validate(value: MemberIdValue): void {
    const nanoidRegex = /^[\w-]{21}$/;
    if (!nanoidRegex.test(value)) {
      throw new Error('Invalid Member ID');
    }
  }

  get value(): MemberIdValue {
    return this._value;
  }
}
