/// <reference types="node" />

import assert from "node:assert/strict";
import { test } from "node:test";

import { Nanoid, StringValueObject, Uuid, ValueObject } from "../../../src/domain/shared/value-objects/index.js";
import { isUuidV7 } from "../../../src/domain/shared/value-objects/uuid.js";

class TestStringValueObject extends StringValueObject<"TestStringValueObject"> {}

class TestValueObject extends ValueObject<string, "TestValueObject"> {}

void test("StringValueObject は文字列を保持して等価性を判定する", () => {
  const first = new TestStringValueObject("value");
  const second = new TestStringValueObject("value");

  assert.equal(first.value, "value");
  assert.equal(first.toString(), "value");
  assert.equal(first.equals(second), true);
  assert.equal(first.equals(new TestStringValueObject("other")), false);
});

void test("ValueObject は index から利用できる", () => {
  assert.equal(new TestValueObject("value").equals(new TestValueObject("value")), true);
});

void test("Nanoid は21文字のURL安全な文字列を受け入れる", () => {
  const nanoid = new Nanoid("A1_b-2cD3eF4gH5iJ6kL7");

  assert.equal(nanoid.value, "A1_b-2cD3eF4gH5iJ6kL7");
});

void test("Nanoid は形式に合わない値を拒否する", () => {
  for (const value of ["", "a".repeat(20), "a".repeat(22), `${"a".repeat(20)}!`, `${"a".repeat(20)}\n`]) {
    assert.throws(() => new Nanoid(value), Error);
  }
});

void test("Uuid はUUID v7文字列を受け入れる", () => {
  const uuidV7 = "018f0a9f-7b3c-7f00-8b2d-3c4d5e6f7081";
  const uuid = new Uuid(uuidV7);

  assert.equal(isUuidV7(uuidV7), true);
  assert.equal(uuid.toString(), uuidV7);
});

void test("Uuid はUUID v7以外の値を拒否する", () => {
  for (const value of [
    "550e8400-e29b-41d4-a716-446655440000",
    "6ba7b810-9dad-61d1-80b4-00c04fd430c8",
    "",
    "018f0a9f-7b3c-7f00-8b2d-3c4d5e6f708",
  ]) {
    assert.equal(isUuidV7(value), false);
    assert.throws(() => new Uuid(value), Error);
  }
});
