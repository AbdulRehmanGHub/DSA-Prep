const reverseString = (str) => {
  const stack = [];

  for (const char of str) {
    // console.log(stack.push(char));
    stack.push(char);
  }

  let reversedStr = "";

  while (stack.length > 0) {
    reversedStr += stack.pop();
  }

  return reversedStr;
};

const result = reverseString("Hello");
console.log(result); // olleH

// const result1 = reverseString("world");
// console.log(result1); // olleH
