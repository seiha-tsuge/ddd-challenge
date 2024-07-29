import { EnrollmentStatus } from './enrollment-status';

describe('EnrollmentStatus', () => {
  it('ActiveステータスでEnrollmentStatusを作成できる', () => {
    const status = new EnrollmentStatus('Active');
    expect(status.value).toBe('Active');
  });

  it('OnLeaveステータスでEnrollmentStatusを作成できる', () => {
    const status = new EnrollmentStatus('OnLeave');
    expect(status.value).toBe('OnLeave');
  });

  it('WithdrawnステータスでEnrollmentStatusを作成できる', () => {
    const status = new EnrollmentStatus('Withdrawn');
    expect(status.value).toBe('Withdrawn');
  });

  it('無効なステータスでエラーがスローされる', () => {
    expect(() => new EnrollmentStatus('InvalidStatus' as any)).toThrow(
      'Invalid enrollment status',
    );
  });

  it('等価性のテスト（同じステータス）', () => {
    const status1 = new EnrollmentStatus('OnLeave');
    const status2 = new EnrollmentStatus('OnLeave');
    expect(status1.equals(status2)).toBe(true);
  });

  it('等価性のテスト（異なるステータス）', () => {
    const status1 = new EnrollmentStatus('Active');
    const status2 = new EnrollmentStatus('Withdrawn');
    expect(status1.equals(status2)).toBe(false);
  });
});
