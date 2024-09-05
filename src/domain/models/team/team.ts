import type { Member } from './member/member';
import type { Pair } from './pair/pair';
import type { TeamCode } from './team-code/team-code';
import type { TeamId } from './team-id/team-id';
import type { TeamName } from './team-name/team-name';

export class Team {
  constructor(
    private readonly _teamId: TeamId,
    private readonly _teamCode: TeamCode,
    private readonly _teamName: TeamName,
    private readonly _pair: Pair,
    private readonly _member: Member,
  ) {}

  static create(teamId: TeamId, teamCode: TeamCode, teamName: TeamName, pair: Pair, member: Member) {
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
