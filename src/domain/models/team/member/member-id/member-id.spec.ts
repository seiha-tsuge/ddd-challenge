import { MemberId } from './member-id';
import { nanoid } from 'nanoid';

describe('MemberId', () => {
  it('有効なMemberIdでMemberIdを作成できる', () => {
    const validId = nanoid();
    const memberId = new MemberId(validId);
    expect(memberId.value).toEqual(validId);
  });

  it('無効なMemberIdでエラーがスローされる（無効な文字列）', () => {
    expect(() => new MemberId('invalid-id')).toThrow('Invalid Member ID');
  });

  it('等価性のテスト（同じMemberId）', () => {
    const id = nanoid();
    const memberId1 = new MemberId(id);
    const memberId2 = new MemberId(id);
    expect(memberId1.equals(memberId2)).toBe(true);
  });

  it('等価性のテスト（異なるMemberId）', () => {
    const id1 = nanoid();
    const id2 = nanoid();
    const memberId1 = new MemberId(id1);
    const memberId2 = new MemberId(id2);
    expect(memberId1.equals(memberId2)).toBe(false);
  });
});
