import { describe, expect, it } from 'vitest';
import { TeamCode } from './team-code';

describe('TeamCode', () => {
  it('有効なTeamCodeでTeamCodeを作成できる', () => {
    const validTeamCode = 'John Doe';
    const teamCode = new TeamCode(validTeamCode);
    expect(teamCode.value).toEqual(validTeamCode);
  });

  it('無効なTeamCodeでエラーがスローされる（空文字列）', () => {
    expect(() => new TeamCode('')).toThrow('無効なTeamCodeです');
  });

  it('無効なTeamCodeでエラーがスローされる（空白のみの文字列）', () => {
    expect(() => new TeamCode('   ')).toThrow('無効なTeamCodeです');
  });

  it('等価性のテスト（同じTeamCode）', () => {
    const teamCodeValue = 'John Doe';
    const teamCode1 = new TeamCode(teamCodeValue);
    const teamCode2 = new TeamCode(teamCodeValue);
    expect(teamCode1.equals(teamCode2)).toBe(true);
  });

  it('等価性のテスト（異なるTeamCode）', () => {
    const teamCode1 = new TeamCode('John Doe');
    const teamCode2 = new TeamCode('Jane Doe');
    expect(teamCode1.equals(teamCode2)).toBe(false);
  });
});
