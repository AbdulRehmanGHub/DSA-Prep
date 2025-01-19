// Find out the valid paranthesis.

// Examples
// "[]{}()"  // true
// "([)])"   // false
// "()"      // true
// "(")      // false

const isValidParanthesis = (str) => {
  const stack = [];

  const brackets = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  for (let char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();

      if (!top || brackets[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValidParanthesis("[](){}")); // true
console.log(isValidParanthesis("([)]")); // false
console.log(isValidParanthesis("()")); // true
console.log(isValidParanthesis("(")); // false
console.log(isValidParanthesis("[]")); // true
