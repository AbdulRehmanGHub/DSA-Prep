// // Reverse the number
const reverseNum = (num) => {
  let reversed = num.toString().split("").reverse().join("");
  let backToNumber = parseInt(reversed) * Math.sign(num);
  // Math.sign is for negative(-) values to be consider as well.
  console.log(backToNumber);
};

reverseNum(-1234);
