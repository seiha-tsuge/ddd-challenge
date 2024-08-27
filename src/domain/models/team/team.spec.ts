import { Team } from './team';
import { TeamId } from './team-id/team-id';
import { TeamCode } from './team-code/team-code';
import { TeamName } from './team-name/team-name';
import { Pair } from './pair/pair';
import { PairId } from './pair/pair-id/pair-id';
import { PairCode } from './pair/pair-code/pair-code';
import { PairName } from './pair/pair-name/pair-name';
import { Member } from './member/member';
import { MemberId } from './member/member-id/member-id';
import { Name } from './member/name/name';
import { Email } from './member/e-mail/e-mail';
import { EnrollmentStatus } from './member/enrollment-status/enrollment-status';
import { JoinDate } from './member/join-date/join-date';
import { nanoid } from 'nanoid';

describe('Teamクラスのテスト', () => {
  let teamId: TeamId;
  let teamCode: TeamCode;
  let teamName: TeamName;
  let pair: Pair;
  let member: Member;
  let team: Team;

  beforeEach(() => {
    teamId = new TeamId(nanoid());
    teamCode = new TeamCode('T123');
    teamName = new TeamName(1);
    pair = new Pair(
      new PairId(nanoid()),
      new PairCode('P123'),
      new PairName('A'),
    );
    member = new Member(
      new MemberId(nanoid()),
      new Name('test'),
      new Email('test@example.com'),
      new EnrollmentStatus('Active'),
      new JoinDate(new Date('2024-07-09')),
    );
    team = Team.create(teamId, teamCode, teamName, pair, member);
  });

  it('新しいTeamインスタンスを作成する', () => {
    expect(team).toBeInstanceOf(Team);
  });

  it('teamIdが正しい値を返す', () => {
    expect(team.teamId).toBe(teamId);
  });

  it('teamCodeが正しい値を返す', () => {
    expect(team.teamCode).toBe(teamCode);
  });

  it('teamNameが正しい値を返す', () => {
    expect(team.teamName).toBe(teamName);
  });

  it('pairが正しい値を返す', () => {
    expect(team.pair).toBe(pair);
  });

  it('memberが正しい値を返す', () => {
    expect(team.member).toBe(member);
  });
});
