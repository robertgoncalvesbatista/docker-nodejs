const test = require("node:test");
const assert = require("node:assert");

const { adicao, subtracao } = require("./functions");

test("adiction of two number", () => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(adicao(2, 2), 4);
});

test("subtraction of two number", () => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(subtracao(5, 2), 3);
});
