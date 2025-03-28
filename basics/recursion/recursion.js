// // Example 1:
// // I want to run func from number 5 to 0. If it reaches 0, it stops execution.

// function countDown(number) {
//   if (number === 0) {
//     console.log("Stopping Point.");
//     return;
//   }

//   console.log(number);
//   countDown(number - 1);
// }

// countDown(5);

// // ------------------------ // //

// // Example 2:
// // Factorial --- 5! = 5 * 4 * 3 * 2 * 1
// // we can do it using loops, but now we are going to solve it using recursion.

// function factorial(number) {
//   if (number === 0) {
//     return 1;
//   }
//   return number * factorial(number - 1);
// }

// // OR, we can also do that in 1 line
const factorial = (number) =>
  number === 0 ? 1 : number * factorial(number - 1);

console.log(factorial(5)); // factorial of 5
console.log(factorial(4)); // factorial of 4
