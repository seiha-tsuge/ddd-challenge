import { ValueObject } from '@/domain/models/shared/value-object';

type TeamNameValue = number;

export class TeamName extends ValueObject<TeamNameValue, 'TeamName'> {
  constructor(value: TeamNameValue) {
    super(value);
  }

  protected validate(value: TeamNameValue): void {
    if (typeof value !== 'number' || !Number.isInteger(value)) {
      throw new Error(
        '無効なTeamNameです。TeamNameは0から999までの数字でなければなりません。',
      );
    }

    if (value < 0 || value > 999) {
      throw new Error(
        '無効なTeamNameです。TeamNameは0から999までの数字でなければなりません。',
      );
    }
  }

  get value(): TeamNameValue {
    return this._value;
  }
}
