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

  it("Tests solution", function () {
    function test(n, expected) {
      it(`n=${n}`, () => {
        let actual = solution(n);
        assert.strictEqual(actual, expected);
      });
    }

    describe("basic tests", function () {
      test(10, 23);
      test(20, 78);
      test(200, 9168);
    });

    describe("smallest cases", function () {
      test(-1, 0);
      test(0, 0);
      test(1, 0);
      test(2, 0);
      test(3, 0);
      test(4, 3);
      test(5, 3);
      test(6, 8);
    });

    describe("random cases", function () {
      function randint(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function _solution(number) {
        let sum = 0;

        for (let i = 1; i < number; i++) {
          if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
          }
        }
        return sum;
      }

      for (let i = 0; i < 100; i++) {
        let rand = randint(0, 10 ** randint(1, 5)) - 100;
        test(rand, _solution(rand));
      }
    });
  });

  it("Tests arrayDiff", () => {
    assert.deepEqual(arrayDiff([1, 2], [1]), [2], "a was [1,2], b was [1]");
    assert.deepEqual(
      arrayDiff([1, 2, 2], [1]),
      [2, 2],
      "a was [1,2,2], b was [1]"
    );
    assert.deepEqual(
      arrayDiff([1, 2, 2], [2]),
      [1],
      "a was [1,2,2], b was [2]"
    );
    assert.deepEqual(
      arrayDiff([1, 2, 2], []),
      [1, 2, 2],
      "a was [1,2,2], b was []"
    );
    assert.deepEqual(arrayDiff([], [1, 2]), [], "a was [], b was [1,2]");
    assert.deepEqual(
      arrayDiff([1, 2, 3], [1, 2]),
      [3],
      "a was [1,2,3], b was [1,2]"
    );
  });

  it("Tests sortMyString", function () {
    assert.strictEqual(challenges.sortMyString("CodeWars"), "CdWr oeas");
    assert.strictEqual(
      challenges.sortMyString("YCOLUE'VREER"),
      "YOU'RE CLEVER"
    );
    assert.strictEqual(
      challenges.sortMyString("tvXfQfxYYj18QLZ2YtdyR5VM722xvrR69uyUyNyvLusXC"),
      "tXQxY1QZYdRV72vR9yyyLsC vffYj8L2ty5M2xr6uUNvuX"
    );
  });
});

describe("Tests Each", function () {
  function act(n, xs, expected) {
    const actual = challenges.each(n, xs.slice());
    assert.deepEqual(actual, expected);
  }

  const basicTests = [
    [1, [], []],
    [-1, [], []],
    [0, [], []],
    [0, [1, 2, 3, 4, 5, 6], []],
    [1, [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]],
    [-1, [1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]],
    [2, [1, 2, 3, 4, 5, 6], [2, 4, 6]],
    [-2, [1, 2, 3, 4, 5, 6], [5, 3, 1]],
    [3, [1, 2], []],
    [-3, [1, 2], []],
    [5, [1, 2, 3, 4, 5, 6, 7], [5]],
    [-5, [1, 2, 3, 4, 5, 6, 7], [3]],
  ];

  describe("Basic tests for Each", function () {
    for (let [n, xs, expected] of basicTests) {
      it(`n = ${n}, xs = [${xs}]`, function () {
        act(n, xs, expected);
      });
    }
  });
});
