import { Order } from './order';

describe('Order', () => {
  it('有効なOrderでOrderを作成できる', () => {
    const validOrderValue = 100;
    const order = new Order(validOrderValue);
    expect(order.value).toEqual(validOrderValue);
  });

  it('無効なOrderでエラーがスローされる（負の数）', () => {
    expect(() => new Order(-1)).toThrow(
      'Order value must be a positive number',
    );
  });

  it('無効なOrderでエラーがスローされる（数値ではない）', () => {
    expect(() => new Order('100' as any)).toThrow(
      'Order value must be a positive number',
    );
  });

  it('等価性のテスト（同じOrder）', () => {
    const orderValue = 100;
    const order1 = new Order(orderValue);
    const order2 = new Order(orderValue);
    expect(order1.equals(order2)).toBe(true);
  });

  it('等価性のテスト（異なるOrder）', () => {
    const order1 = new Order(100);
    const order2 = new Order(200);
    expect(order1.equals(order2)).toBe(false);
  });
});
