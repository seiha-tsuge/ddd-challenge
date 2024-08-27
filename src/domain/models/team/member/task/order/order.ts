import { ValueObject } from '@/domain/models/shared/value-object';

type OrderValue = number;

export class Order extends ValueObject<OrderValue, 'Order'> {
  constructor(value: OrderValue) {
    super(value);
  }

  protected validate(value: OrderValue): void {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('Order value must be a positive number');
    }
  }

  get value(): OrderValue {
    return this._value;
  }
}
