import { nanoid } from 'nanoid';
import { beforeEach, describe, expect, it } from 'vitest';
import { Email } from './e-mail/e-mail';
import { EnrollmentStatus } from './enrollment-status/enrollment-status';
import { JoinDate } from './join-date/join-date';
import { Member } from './member';
import { MemberId } from './member-id/member-id';
import { Name } from './name/name';

describe('Memberクラスのテスト', () => {
  let memberId: MemberId;
  let name: Name;
  let email: Email;
  let enrollmentStatus: EnrollmentStatus;
  let joinDate: JoinDate;
  let member: Member;

  beforeEach(() => {
    memberId = new MemberId(nanoid());
    name = new Name('山田 太郎');
    email = new Email('yamada.taro@example.com');
    enrollmentStatus = new EnrollmentStatus('Active');
    joinDate = new JoinDate(new Date('2023-01-01'));
    member = Member.create(memberId, name, email, enrollmentStatus, joinDate);
  });

  it('新しいMemberインスタンスを作成する', () => {
    expect(member).toBeInstanceOf(Member);
  });

  it('memberIdが正しい値を返す', () => {
    expect(member.memberId).toBe(memberId);
  });

  it('nameが正しい値を返す', () => {
    expect(member.name).toBe(name);
  });

  it('emailが正しい値を返す', () => {
    expect(member.email).toBe(email);
  });

  it('enrollmentStatusが正しい値を返す', () => {
    expect(member.enrollmentStatus).toBe(enrollmentStatus);
  });

  it('joinDateが正しい値を返す', () => {
    expect(member.joinDate).toBe(joinDate);
  });
});
