import { ValueObject } from "./value-object.js";

/**
 * 文字列を値として保持する汎用値オブジェクト。
 */
export abstract class StringValueObject<B> extends ValueObject<string, B> {}
