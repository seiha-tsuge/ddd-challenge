import { JoinDate } from './join-date';

describe('JoinDate', () => {
  it('有効な日付でJoinDateを作成できる', () => {
    const validDate = new Date('2024-07-09');
    const joinDate = new JoinDate(validDate);
    expect(joinDate.value).toEqual(validDate);
  });

  it('無効な日付でエラーがスローされる（文字列）', () => {
    expect(() => new JoinDate('invalid-date' as any)).toThrow(
      '無効なJoinDateです',
    );
  });

  it('無効な日付でエラーがスローされる（NaN）', () => {
    expect(() => new JoinDate(new Date('invalid-date'))).toThrow(
      '無効なJoinDateです',
    );
  });

  it('等価性のテスト（同じ日付）', () => {
    const date1 = new Date('2024-07-09');
    const date2 = new Date('2024-07-09');
    const joinDate1 = new JoinDate(date1);
    const joinDate2 = new JoinDate(date2);
    expect(joinDate1.equals(joinDate2)).toBe(true);
  });

  it('等価性のテスト（異なる日付）', () => {
    const date1 = new Date('2024-07-09');
    const date2 = new Date('2024-07-10');
    const joinDate1 = new JoinDate(date1);
    const joinDate2 = new JoinDate(date2);
    expect(joinDate1.equals(joinDate2)).toBe(false);
  });
});
