let nums = [];
let target = 0;

export const getInput = (variant) => {
  switch (variant) {
    case "unsorted":
      nums = [1, 5, 3, 7, 9, 2, 8, 4, 6];
      target = 13;
      return [nums, target];
    case "sorted":
      nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      target = 13;
      return [nums, target]
    default:
      return [nums, target];
  }
};