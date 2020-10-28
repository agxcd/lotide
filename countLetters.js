// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


const countLetters = function(sentence) {
  let result = {};
  for (let letters of sentence) {
    if (result[letters]) {
      result[letters] += 1;
      // console.log("result",result);
    } else {
      result[letters] = 1;
      // console.log("result",result);
    }
  }
  // console.log("result",result);
  return result;

}

console.log(countLetters("lighthouse in the house"));
