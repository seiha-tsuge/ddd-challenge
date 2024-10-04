import { ValueObject } from '@/domain/models/shared/value-object';

export type MemberIdValue = string;

export class MemberId extends ValueObject<MemberIdValue, 'MemberId'> {
  constructor(value: MemberIdValue) {
    super(value);
    this.validate(value);
  }

  protected validate(value: MemberIdValue): void {
    const nanoidRegex = /^[\w-]{21}$/;
    if (!nanoidRegex.test(value)) {
      throw new Error('無効なMemberIdです');
    }
  }

  get value(): MemberIdValue {
    return this._value;
  }
}
