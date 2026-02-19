import { getInput } from "./inputs.js";

const [nums, target] = getInput("sorted");

const searchPosition = () => {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  while (leftPointer < rightPointer) {
    const sum = nums[leftPointer] + nums[rightPointer];
    if (sum === target) {
      return [leftPointer, rightPointer];
    } else if (sum > target) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
  return "There is no combination that gives " + target;
};

console.log(searchPosition());
