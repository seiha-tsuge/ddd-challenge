import { describe, expect, it } from 'vitest';
import { Content } from './content';

describe('Content', () => {
  it('有効なContentでContentを作成できる', () => {
    const validContent = 'Books';
    const content = new Content(validContent);
    expect(content.value).toEqual(validContent);
  });

  it('無効なContentでエラーがスローされる（空文字列）', () => {
    expect(() => new Content('')).toThrow('無効なContentです');
  });

  it('無効なContentでエラーがスローされる（空白のみの文字列）', () => {
    expect(() => new Content('   ')).toThrow('無効なContentです');
  });

  it('等価性のテスト（同じContent）', () => {
    const contentValue = 'Books';
    const content1 = new Content(contentValue);
    const content2 = new Content(contentValue);
    expect(content1.equals(content2)).toBe(true);
  });

  it('等価性のテスト（異なるContent）', () => {
    const content1 = new Content('Books');
    const content2 = new Content('Movies');
    expect(content1.equals(content2)).toBe(false);
  });
});
