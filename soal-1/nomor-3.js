import test from "node:test";
import assert from "node:assert/strict";

const retrieveTotalEvenNum = (obj) => {
  const arrayObj = Object.values(obj);

  let currentTotal = 0;

  for (let i = 0; i < arrayObj.length; i++) {
    const item = arrayObj[i];

    if (!item) continue;

    if (typeof item === "number" && item % 2 === 0)
      currentTotal = currentTotal + item;

    if (typeof item === "object" && !Array.isArray(item))
      currentTotal = currentTotal + retrieveTotalEvenNum(item);
  }

  return currentTotal;
};

// Unit Tests
test("should return 6", () => {
  const input = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  };

  assert.equal(retrieveTotalEvenNum(input), 6);
});

test("should return 12", () => {
  const input = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 4 }, ee: "car" },
  };

  assert.equal(retrieveTotalEvenNum(input), 12);
});
