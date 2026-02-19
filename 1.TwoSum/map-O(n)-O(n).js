import { getInput } from "./inputs.js";

const [nums, target] = getInput("unsorted");

const searchPosition = () => {
  const seen = new Map(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];

    if (seen.has(need)) {
      return [seen.get(need), i];
    }

    seen.set(nums[i], i);
  }
};

console.log(searchPosition());
