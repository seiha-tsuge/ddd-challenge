import { TaskId } from './task-id';
import { nanoid } from 'nanoid';

describe('TaskId', () => {
  it('有効なTaskIdでTaskIdを作成できる', () => {
    const validId = nanoid();
    const taskId = new TaskId(validId);
    expect(taskId.value).toEqual(validId);
  });

  it('無効なTaskIdでエラーがスローされる（無効な文字列）', () => {
    expect(() => new TaskId('invalid-id')).toThrow('Invalid Task ID');
  });

  it('等価性のテスト（同じTaskId）', () => {
    const id = nanoid();
    const taskId1 = new TaskId(id);
    const taskId2 = new TaskId(id);
    expect(taskId1.equals(taskId2)).toBe(true);
  });

  it('等価性のテスト（異なるTaskId）', () => {
    const id1 = nanoid();
    const id2 = nanoid();
    const taskId1 = new TaskId(id1);
    const taskId2 = new TaskId(id2);
    expect(taskId1.equals(taskId2)).toBe(false);
  });
});
