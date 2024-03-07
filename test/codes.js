import { assert } from "chai";
import * as challenges from "../app/codeChallenges.js";

describe("Fixed Tests", () => {
  it("Tests pastMidnight", () => {
    assert.strictEqual(challenges.pastMidnight(0, 1, 1), 61000);
    assert.strictEqual(challenges.pastMidnight(1, 1, 1), 3661000);
    assert.strictEqual(challenges.pastMidnight(0, 0, 0), 0);
    assert.strictEqual(challenges.pastMidnight(1, 0, 1), 3601000);
    assert.strictEqual(challenges.pastMidnight(1, 0, 0), 3600000);
  });

  it("Tests getCount", () => {
    assert.strictEqual(challenges.getCount("abracadabra"), 5);
    assert.strictEqual(challenges.getCount("pear tree"), 4);
    assert.strictEqual(
      challenges.getCount("o a kak ushakov lil vo kashu kakao"),
      13
    );
  });

  it("Tests findUniq", () => {
    assert.strictEqual(challenges.findUniq([1, 0, 0]), 1);
    assert.strictEqual(challenges.findUniq([0, 1, 0]), 1);
    assert.strictEqual(challenges.findUniq([0, 0, 1]), 1);
    assert.strictEqual(challenges.findUniq([1, 1, 1, 2, 1, 1]), 2);
    assert.strictEqual(challenges.findUniq([1, 1, 2, 1, 1]), 2);
    assert.strictEqual(challenges.findUniq([3, 10, 3, 3, 3]), 10);
  });
});
