import { StringValueObject } from "./string-value-object.js";

const NANOID_PATTERN = /^[A-Za-z0-9_-]{21}$/;

/**
 * Nano ID形式の値オブジェクト。
 */
export class Nanoid extends StringValueObject<"Nanoid"> {
  /**
   * 21文字のURL安全な文字列を保持して生成する。
   */
  constructor(value: string) {
    super(value);

    if (typeof value !== "string" || value.length !== 21 || !NANOID_PATTERN.test(value)) {
      throw new Error("Nanoidは英大文字・英小文字・数字・_・-のみを使った21文字である必要があります");
    }
  }
}
