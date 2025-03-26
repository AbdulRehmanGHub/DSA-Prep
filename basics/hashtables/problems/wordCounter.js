// const text = "Hi my name is Abdul and my city is ABC";
// // Result will be like this:
// // Hi: 1, my: 2, name: 1, is: 2, and: 1, city: 1, ABC: 1

// // --------------- Solution -----------------
function wordCounter(text) {
  const lowerCaseText = text.toLowerCase();
  const wordMap = {};
  const words = lowerCaseText.split(/\s+/); // used regex

  for (const word of words) {
    if (word in wordMap) {
      wordMap[word]++;
    } else {
      wordMap[word] = 1;
    }
  }
  return wordMap;
}

const text = "Hi my name is Abdul and my city is ABC";
const result = wordCounter(text);
console.log(result);

// const text1 = "I am learning DSA";
// const text2 = "Pakistan and India and UK and USA and UAE and DSA";
// const result1 = wordCounter(text1);
// const result2 = wordCounter(text2);
// console.log(result1);
// console.log(result2);
