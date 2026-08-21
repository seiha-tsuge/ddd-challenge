/**
 * `Primitives` は value object が直接保持できる値の型を制限します。
 * object graph ではなく比較可能な値だけを基底 class の対象にするためです。
 */
export type Primitives = string | number | boolean | Date;

/**
 * 値を不変に保持する基底値オブジェクト。
 */
export abstract class ValueObject<T extends Primitives, B> {
  readonly value: T;
  declare protected readonly __brand: B;

  /**
   * 値を保持して生成する。
   */
  constructor(value: T) {
    this.value = value;
    this.ensureValueIsDefined(value);
  }

  /**
   * 値が未設定でないことを確認する。
   */
  private ensureValueIsDefined(value: T): void {
    if (value === null || value === undefined) {
      throw new Error("値は必須です");
    }
  }

  /**
   * 同一型かつ同一値か判定する。
   */
  equals(other: ValueObject<T, B>): boolean {
    if (other.constructor !== this.constructor) {
      return false;
    }

    if (this.value instanceof Date && other.value instanceof Date) {
      return this.value.getTime() === other.value.getTime();
    }

    return other.value === this.value;
  }

  /**
   * 文字列表現を返す。
   */
  toString(): string {
    return this.value.toString();
  }
}
