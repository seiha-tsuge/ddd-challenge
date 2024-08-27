import { Title } from './title';

describe('Title', () => {
  it('有効なTitleでTitleを作成できる', () => {
    const validTitle = 'Books';
    const title = new Title(validTitle);
    expect(title.value).toEqual(validTitle);
  });

  it('無効なTitleでエラーがスローされる（空文字列）', () => {
    expect(() => new Title('')).toThrow('無効なTitleです');
  });

  it('無効なTitleでエラーがスローされる（空白のみの文字列）', () => {
    expect(() => new Title('   ')).toThrow('無効なTitleです');
  });

  it('等価性のテスト（同じTitle）', () => {
    const titleValue = 'Books';
    const title1 = new Title(titleValue);
    const title2 = new Title(titleValue);
    expect(title1.equals(title2)).toBe(true);
  });

  it('等価性のテスト（異なるTitle）', () => {
    const title1 = new Title('Books');
    const title2 = new Title('Movies');
    expect(title1.equals(title2)).toBe(false);
  });
});
