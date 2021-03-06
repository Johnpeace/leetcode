/**
 * @param {number[]} nums
 * @return {number}
 
 Question: https://leetcode.com/problems/house-robber
 
 Approach: Dynamic Programming
 
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  return swap(nums);
};

var swap = function (nums) {
  let previousMax = 0,
    currentMax = 0;

  for (num of nums) {
    temp = currentMax;
    summedMax = previousMax + num;
    currentMax = Math.max(summedMax, currentMax);
    previousMax = temp;
  }

  return currentMax;
};
