// // check if the string is palindrome or not
const palindromeFunc = (str) => {
  let a = str.split("").reverse().join("");

  if (a === str) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
};

palindromeFunc("oppo");
palindromeFunc("nokia");
palindromeFunc("madam");
palindromeFunc("apple");
