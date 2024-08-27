import { TeamId } from './team-id/team-id';
import { TeamCode } from './team-code/team-code';
import { TeamName } from './team-name/team-name';
import { Pair } from './pair/pair';
import { Member } from './member/member';

export class Team {
  constructor(
    private readonly _teamId: TeamId,
    private readonly _teamCode: TeamCode,
    private readonly _teamName: TeamName,
    private readonly _pair: Pair,
    private readonly _member: Member,
  ) {}

  static create(
    teamId: TeamId,
    teamCode: TeamCode,
    teamName: TeamName,
    pair: Pair,
    member: Member,
  ) {
    return new Team(teamId, teamCode, teamName, pair, member);
  }

  get teamId(): TeamId {
    return this._teamId;
  }

  get teamCode(): TeamCode {
    return this._teamCode;
  }

  get teamName(): TeamName {
    return this._teamName;
  }

  get pair(): Pair {
    return this._pair;
  }

  get member(): Member {
    return this._member;
  }
}
