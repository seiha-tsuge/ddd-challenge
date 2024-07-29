import { Name } from './name';

describe('Name', () => {
  it('有効なNameでNameを作成できる', () => {
    const validName = 'John Doe';
    const name = new Name(validName);
    expect(name.value).toEqual(validName);
  });

  it('無効なNameでエラーがスローされる（空文字列）', () => {
    expect(() => new Name('')).toThrow('Invalid name');
  });

  it('無効なNameでエラーがスローされる（空白のみの文字列）', () => {
    expect(() => new Name('   ')).toThrow('Invalid name');
  });

  it('等価性のテスト（同じName）', () => {
    const nameValue = 'John Doe';
    const name1 = new Name(nameValue);
    const name2 = new Name(nameValue);
    expect(name1.equals(name2)).toBe(true);
  });

  it('等価性のテスト（異なるName）', () => {
    const name1 = new Name('John Doe');
    const name2 = new Name('Jane Doe');
    expect(name1.equals(name2)).toBe(false);
  });
});
