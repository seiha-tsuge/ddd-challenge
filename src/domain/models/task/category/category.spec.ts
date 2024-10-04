import { describe, expect, it } from 'vitest';
import { Category } from './category';

describe('Category', () => {
  it('有効なCategoryでCategoryを作成できる', () => {
    const validCategory = 'Books';
    const category = new Category(validCategory);
    expect(category.value).toEqual(validCategory);
  });

  it('無効なCategoryでエラーがスローされる（空文字列）', () => {
    expect(() => new Category('')).toThrow('無効なCategoryです');
  });

  it('無効なCategoryでエラーがスローされる（空白のみの文字列）', () => {
    expect(() => new Category('   ')).toThrow('無効なCategoryです');
  });

  it('等価性のテスト（同じCategory）', () => {
    const categoryValue = 'Books';
    const category1 = new Category(categoryValue);
    const category2 = new Category(categoryValue);
    expect(category1.equals(category2)).toBe(true);
  });

  it('等価性のテスト（異なるCategory）', () => {
    const category1 = new Category('Books');
    const category2 = new Category('Movies');
    expect(category1.equals(category2)).toBe(false);
  });
});
