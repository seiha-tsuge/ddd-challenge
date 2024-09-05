import { describe, expect, it } from 'vitest';
import { TeamName } from './team-name';

describe('TeamName', () => {
  it('有効なTeamNameでTeamNameを作成できる', () => {
    const validTeamName = 123;
    const teamName = new TeamName(validTeamName);
    expect(teamName.value).toEqual(validTeamName);
  });

  const invalidTeamNames = [
    { value: -1, description: '負の整数' },
    { value: 1000, description: '1000以上の整数' },
    { value: 3.14, description: '小数値' },
    { value: '123', description: '文字列としての数字' },
    { value: Number.NaN, description: 'NaN' },
    { value: Number.POSITIVE_INFINITY, description: '無限大' },
    { value: null, description: 'null' },
    { value: undefined, description: 'undefined' },
  ];

  for (const { value, description } of invalidTeamNames) {
    it(`無効なTeamNameでエラーがスローされる (${description})`, () => {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      expect(() => new TeamName(value as any)).toThrow(
        '無効なTeamNameです。TeamNameは0から999までの数字でなければなりません。',
      );
    });
  }

  it('等価性のテスト（同じTeamName）', () => {
    const teamNameValue = 456;
    const teamName1 = new TeamName(teamNameValue);
    const teamName2 = new TeamName(teamNameValue);
    expect(teamName1.equals(teamName2)).toBe(true);
  });

  it('等価性のテスト（異なるTeamName）', () => {
    const teamName1 = new TeamName(789);
    const teamName2 = new TeamName(987);
    expect(teamName1.equals(teamName2)).toBe(false);
  });
});
