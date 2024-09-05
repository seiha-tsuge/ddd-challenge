import { describe, expect, it } from 'vitest';
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
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    expect(() => new ProgressStatus('InvalidStatus' as any)).toThrow('無効なProgressStatusです');
  });

  it('CompletedからNotStartedへの変更でエラーがスローされる', () => {
    const status = new ProgressStatus('Completed');
    expect(() => status.changeStatus('NotStarted')).toThrow(
      'ステータスをCompletedからReviewPendingまたはNotStartedに戻すことはできません',
    );
  });

  it('CompletedからReviewPendingへの変更でエラーがスローされる', () => {
    const status = new ProgressStatus('Completed');
    expect(() => status.changeStatus('ReviewPending')).toThrow(
      'ステータスをCompletedからReviewPendingまたはNotStartedに戻すことはできません',
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
