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

  it("Tests duplicateCount", () => {
    assert.strictEqual(challenges.duplicateCount(""), 0);
    assert.strictEqual(challenges.duplicateCount("abcde"), 0);
    assert.strictEqual(challenges.duplicateCount("aabbcde"), 2);
    assert.strictEqual(
      challenges.duplicateCount("aabBcde"),
      2,
      "should ignore case"
    );
    assert.strictEqual(challenges.duplicateCount("Indivisibility"), 1);
    assert.strictEqual(
      challenges.duplicateCount("Indivisibilities"),
      2,
      "characters may not be adjacent"
    );
  });

  it("Tests descendingOrder", () => {
    assert.strictEqual(challenges.descendingOrder(0), 0);
    assert.strictEqual(challenges.descendingOrder(1), 1);
    assert.strictEqual(challenges.descendingOrder(111), 111);
    assert.strictEqual(challenges.descendingOrder(15), 51);
    assert.strictEqual(challenges.descendingOrder(1021), 2110);
    assert.strictEqual(challenges.descendingOrder(123456789), 987654321);
  });

  it("Tests getMiddle", function () {
    assert.strictEqual(challenges.getMiddle("yeet"), "ee");
    assert.strictEqual(challenges.getMiddle("testing"), "t");
    assert.strictEqual(challenges.getMiddle("middle"), "dd");
    assert.strictEqual(challenges.getMiddle("A"), "A");
  });

  it("Tests isIsogram", function () {
    assert.strictEqual(challenges.isIsogram("Dermatoglyphics"), true);
    assert.strictEqual(challenges.isIsogram("testing"), false);
    assert.strictEqual(challenges.isIsogram("moOse"), false);
    assert.strictEqual(challenges.isIsogram("A"), true);
  });

  it("Tests pigIt", function () {
    assert.strictEqual(
      challenges.pigIt("This is my string"),
      "hisTay siay ymay tringsay"
    );
    assert.strictEqual(
      challenges.pigIt("Quis custodiet ipsos custodes ?"),
      "uisQay ustodietcay psosiay ustodescay ?"
    );
    assert.strictEqual(
      challenges.pigIt("O tempora o mores !"),
      "Oay emporatay oay oresmay !"
    );
  });
});
