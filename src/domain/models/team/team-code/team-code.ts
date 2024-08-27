import { ValueObject } from '@/domain/models/shared/value-object';

type TeamCodeValue = string;

export class TeamCode extends ValueObject<TeamCodeValue, 'TeamCode'> {
  constructor(value: TeamCodeValue) {
    super(value);
  }

  protected validate(value: TeamCodeValue): void {
    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new Error('無効なTeamCodeです');
    }
  }

  get value(): TeamCodeValue {
    return this._value;
  }
}
