import { ValueObject } from '@/domain/models/shared/value-object';

type OrderValue = number;

export class Order extends ValueObject<OrderValue, 'Order'> {
  constructor(value: OrderValue) {
    super(value);
    this.validate(value);
  }

  protected validate(value: OrderValue): void {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('無効なOrderです');
    }
  }

  get value(): OrderValue {
    return this._value;
  }
}
