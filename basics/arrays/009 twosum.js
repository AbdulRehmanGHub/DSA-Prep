// // find the two sum from the array.
// // For example: if arr = [1, 2, 5, 7, 9, 11] and we need to find the result/sum of two numbers = 9.
// // Then the result will be [2, 7] in our case.

// // But this is not an optimized or optimal way of doing this question like this. We will cover the most optimal solution later on.

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
};

// const answer = twoSum([2, 7, 9, 11, 15], 9);        // let's say we want to find the sum pair of 9 -- shows indexes
const answer = twoSum([2, 7, 9, 11, 15], 20); // let's say we want to find the sum pair of 20  -- shows indexes
console.log(answer);
