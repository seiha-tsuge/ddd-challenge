import type { Category } from './category/category';
import type { Content } from './content/content';
import type { Order } from './order/order';
import type { ProgressStatus } from './progress-status/progress-status';
import type { TaskId } from './task-id/task-id';
import type { Title } from './title/title';

export class Task {
  constructor(
    private readonly _taskId: TaskId,
    private readonly _title: Title,
    private readonly _content: Content,
    private readonly _progressStatus: ProgressStatus,
    private readonly _order: Order,
    private readonly _category: Category,
  ) {}

  static create(
    taskId: TaskId,
    title: Title,
    content: Content,
    progressStatus: ProgressStatus,
    order: Order,
    category: Category,
  ) {
    return new Task(taskId, title, content, progressStatus, order, category);
  }

  get taskId(): TaskId {
    return this._taskId;
  }

  get title(): Title {
    return this._title;
  }

  get content(): Content {
    return this._content;
  }

  get progressStatus(): ProgressStatus {
    return this._progressStatus;
  }

  get order(): Order {
    return this._order;
  }

  get category(): Category {
    return this._category;
  }
}
