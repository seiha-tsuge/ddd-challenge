import { validate as uuidValidate, version as uuidVersion } from "uuid";

import { StringValueObject } from "./string-value-object.js";

/**
 * UUID v7か判定する。
 */
export const isUuidV7 = (value: string): boolean => uuidValidate(value) && uuidVersion(value) === 7;

/**
 * UUID v7形式の値オブジェクト。
 */
export class Uuid extends StringValueObject<"Uuid"> {
  /**
   * UUID v7文字列を保持して生成する。
   */
  constructor(value: string) {
    super(value);

    if (!isUuidV7(value)) {
      throw new Error("UUID v7形式の値が必要です");
    }
  }
}
