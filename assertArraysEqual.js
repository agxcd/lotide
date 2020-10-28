// const assertArraysEqual = function(arr1, arr2) {
//   let counter = 0;
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] === arr2[i]) {
//         counter++;
//       }
//     }
//     console.log("arr1", arr1);
//     console.log("arr2", arr2);
//     if (counter === arr1.length) {
//       return ("✅✅✅Assertion Passed: " + arr1 + " ===" + arr2);
//     } else {
//       return ("🔴🔴🔴Assertion Failed: " + arr1 + " !== " + arr2);
//     }
//   }
// };


console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]));


const eqArrays = function(arrayA, arrayB) {
  let result = false;
  //use nested loop to iterate each items in each array
  for (let i = 0; i <= arrayA.length - 1; i++) {
    for (let j = 0; j <= arrayB.length - 1; j++) {
      //check each value to determine if they match
      if (arrayA[i] === arrayB[j]) {
        result = true;
      } else {
        result = false;
      }
    }
  }
  return result;
};
//make a function that calls your eqArrays function and two arrays and then tells you if the two arrays match
const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅✅✅ Assertion Passed:  ${arrayA}  === ${arrayB}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${arrayA}  !== ${arrayB}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); 