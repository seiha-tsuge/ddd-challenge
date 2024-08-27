import { ProgressStatus } from './progress-status';

describe('ProgressStatus', () => {
  it('NotStartedステータスでProgressStatusを作成できる', () => {
    const status = new ProgressStatus('NotStarted');
    expect(status.value).toBe('NotStarted');
  });

  it('ReviewPendingステータスでProgressStatusを作成できる', () => {
    const status = new ProgressStatus('ReviewPending');
    expect(status.value).toBe('ReviewPending');
  });

  it('CompletedステータスでProgressStatusを作成できる', () => {
    const status = new ProgressStatus('Completed');
    expect(status.value).toBe('Completed');
  });

  it('無効なステータスでエラーがスローされる', () => {
    expect(() => new ProgressStatus('InvalidStatus' as any)).toThrow(
      'Invalid progress status',
    );
  });

  it('CompletedからNotStartedへの変更でエラーがスローされる', () => {
    const status = new ProgressStatus('Completed');
    expect(() => status.changeStatus('NotStarted')).toThrow(
      'Cannot change status back from Completed to ReviewPending or NotStarted',
    );
  });

  it('CompletedからReviewPendingへの変更でエラーがスローされる', () => {
    const status = new ProgressStatus('Completed');
    expect(() => status.changeStatus('ReviewPending')).toThrow(
      'Cannot change status back from Completed to ReviewPending or NotStarted',
    );
  });

  it('NotStartedからReviewPendingにステータスを変更できる', () => {
    const status = new ProgressStatus('NotStarted');
    const newStatus = status.changeStatus('ReviewPending');
    expect(newStatus.value).toBe('ReviewPending');
  });

  it('等価性のテスト（同じステータス）', () => {
    const status1 = new ProgressStatus('ReviewPending');
    const status2 = new ProgressStatus('ReviewPending');
    expect(status1.equals(status2)).toBe(true);
  });

  it('等価性のテスト（異なるステータス）', () => {
    const status1 = new ProgressStatus('NotStarted');
    const status2 = new ProgressStatus('Completed');
    expect(status1.equals(status2)).toBe(false);
  });
});
