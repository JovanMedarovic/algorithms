import { getInput } from "./inputs.js";

const isBracketsValid = (input) => {
  if (input === "") {
    return true;
  }

  if (!input) {
    return false;
  }

  const stack = [];
  const logicPairs = new Map();
  logicPairs.set("[", "]");
  logicPairs.set("{", "}");
  logicPairs.set("(", ")");
  const brackets = input.split("");

  for (const bracket of brackets) {
    if (logicPairs.has(bracket)) {
      stack.push(logicPairs.get(bracket));
    } else {
      const expected = stack.pop();
      if (expected !== bracket) {
        return false;
      }
    }
  }
  if(stack.length === 0 ) {
    return true;
  } 
  return false
};

for (let i = 1; i <= 10; i++) {
  console.log(isBracketsValid(getInput(i)));
}

// console.log(isBracketsValid("{{[}]}"));
