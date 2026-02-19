import { getInput } from "./inputs.js";

const [nums, target] = getInput("unsorted");

const searchPosition = () => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(searchPosition());
