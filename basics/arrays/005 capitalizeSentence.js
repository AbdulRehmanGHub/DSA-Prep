// // Capitalize the starting letter of each word
const sentence = (sen) => {
  return sen
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(sentence("hello world, how are you?"));
