import { ValueObject } from '@/domain/models/shared/value-object';

type TeamIdValue = string;

export class TeamId extends ValueObject<TeamIdValue, 'TeamId'> {
  constructor(value: TeamIdValue) {
    super(value);
    this.validate(value);
  }

  protected validate(value: TeamIdValue): void {
    const nanoidRegex = /^[\w-]{21}$/;
    if (!nanoidRegex.test(value)) {
      throw new Error('無効なTeamIdです');
    }
  }

  get value(): TeamIdValue {
    return this._value;
  }
}
