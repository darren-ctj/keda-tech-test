import test from "node:test";
import assert from "node:assert/strict";

const findMaximumSubarraySum = (arr, length) => {
  if (!Array.isArray(arr) || typeof length !== "number" || length < 1)
    return null;

  const maxIndex = arr.length - length;
  if (maxIndex < 0) return null;

  let maxSum;
  let currentTotal;

  for (let i = 0; i < maxIndex + 1; i++) {
    const outgoingNumber = arr[i - 1];
    const incomingNumber = arr[i + length - 1];

    if (!outgoingNumber) {
      currentTotal = arr
        .slice(i, i + length)
        .reduce((total, item) => total + item, 0);

      maxSum = currentTotal;

      continue;
    }

    currentTotal = currentTotal - outgoingNumber + incomingNumber;

    if (currentTotal > maxSum) maxSum = currentTotal;
  }

  return maxSum;
};

// Unit Tests
test("should return 700", () => {
  const inputArray = [100, 200, 300, 400];
  const inputLengthNumber = 2;

  assert.equal(findMaximumSubarraySum(inputArray, inputLengthNumber), 700);
});

test("should return 39", () => {
  const inputArray = [1, 4, 2, 10, 23, 3, 1, 0, 20];
  const inputLengthNumber = 4;

  assert.equal(findMaximumSubarraySum(inputArray, inputLengthNumber), 39);
});

test("should return 5", () => {
  const inputArray = [-3, 4, 0, -2, 6, -1];
  const inputLengthNumber = 2;

  assert.equal(findMaximumSubarraySum(inputArray, inputLengthNumber), 5);
});
