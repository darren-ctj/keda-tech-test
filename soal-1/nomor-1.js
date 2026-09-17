import test from "node:test";
import assert from "node:assert/strict";

// Notes : Kompleksitas Waktu O(n^2), menggunakan sejenis "Bubble Sort" karena jujur untuk saat ini yang paling mudah dan natural untuk saya terapkan
const sortDescendingArray = (arr) => {
  if (!Array.isArray(arr)) return null;

  const finalArr = [...arr];

  for (let i = 0; i < finalArr.length - 1; i++) {
    for (let j = 0; j < finalArr.length - 1; j++) {
      if (j === finalArr.length - i) break;

      const currentItem = finalArr[j];
      const nextItem = finalArr[j + 1];

      if (currentItem < nextItem) {
        finalArr[j] = nextItem;
        finalArr[j + 1] = currentItem;
      }
    }
  }

  return finalArr;
};

// Unit Tests
test("Should sort the array from largest to smallest", () => {
  const inputArray = [1, 2, 4, 3, 5, 3, 2, 1];
  const expectedOutput = [5, 4, 3, 3, 2, 2, 1, 1];

  assert.deepEqual(sortDescendingArray(inputArray), expectedOutput);
});
