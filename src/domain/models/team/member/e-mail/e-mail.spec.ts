import { Email } from './e-mail';

describe('Email', () => {
  let email: Email;

  beforeEach(() => {
    email = new Email('test@example.com');
  });

  it('インスタンスが定義されていること', () => {
    expect(email).toBeDefined();
  });

  it('有効な形式のメールアドレスを作成できること', () => {
    const validEmail = new Email('valid@example.com');
    expect(validEmail.value).toBe('valid@example.com');
  });

  it('無効な形式のメールアドレスでエラーを投げること', () => {
    expect(() => new Email('invalid-email')).toThrow('Invalid email format');
  });

  it('他のEmailオブジェクトと正しく等価性を検証できること', () => {
    const email1 = new Email('same@example.com');
    const email2 = new Email('same@example.com');
    expect(email1.equals(email2)).toBe(true);

    const email3 = new Email('different@example.com');
    expect(email1.equals(email3)).toBe(false);
  });

  it('正しいメールアドレスの値を返すこと', () => {
    expect(email.value).toBe('test@example.com');
  });
});
