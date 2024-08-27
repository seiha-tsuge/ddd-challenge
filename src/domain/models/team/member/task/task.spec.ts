import { Task } from './task';
import { TaskId } from './task-id/task-id';
import { Title } from './title/title';
import { Content } from './content/content';
import { ProgressStatus } from './progress-status/progress-status';
import { Order } from './order/order';
import { Category } from './category/category';
import { nanoid } from 'nanoid';

describe('Taskクラスのテスト', () => {
  let taskId: TaskId;
  let title: Title;
  let content: Content;
  let progressStatus: ProgressStatus;
  let order: Order;
  let category: Category;
  let task: Task;

  beforeEach(() => {
    taskId = new TaskId(nanoid());
    title = new Title('タスクのタイトル');
    content = new Content('タスクの内容');
    progressStatus = new ProgressStatus('NotStarted');
    order = new Order(1);
    category = new Category('仕事');
    task = Task.create(taskId, title, content, progressStatus, order, category);
  });

  it('新しいTaskインスタンスを作成する', () => {
    expect(task).toBeInstanceOf(Task);
  });

  it('taskIdが正しい値を返す', () => {
    expect(task.taskId).toBe(taskId);
  });

  it('titleが正しい値を返す', () => {
    expect(task.title).toBe(title);
  });

  it('contentが正しい値を返す', () => {
    expect(task.content).toBe(content);
  });

  it('progressStatusが正しい値を返す', () => {
    expect(task.progressStatus).toBe(progressStatus);
  });

  it('orderが正しい値を返す', () => {
    expect(task.order).toBe(order);
  });

  it('categoryが正しい値を返す', () => {
    expect(task.category).toBe(category);
  });
});
