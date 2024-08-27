import { TeamId } from './team-id';
import { nanoid } from 'nanoid';

describe('TeamId', () => {
  it('有効なTeamIdでTeamIdを作成できる', () => {
    const validId = nanoid();
    const teamId = new TeamId(validId);
    expect(teamId.value).toEqual(validId);
  });

  it('無効なTeamIdでエラーがスローされる（無効な文字列）', () => {
    expect(() => new TeamId('invalid-id')).toThrow('無効なTeamIdです');
  });

  it('等価性のテスト（同じTeamId）', () => {
    const id = nanoid();
    const teamId1 = new TeamId(id);
    const teamId2 = new TeamId(id);
    expect(teamId1.equals(teamId2)).toBe(true);
  });

  it('等価性のテスト（異なるTeamId）', () => {
    const id1 = nanoid();
    const id2 = nanoid();
    const teamId1 = new TeamId(id1);
    const teamId2 = new TeamId(id2);
    expect(teamId1.equals(teamId2)).toBe(false);
  });
});
