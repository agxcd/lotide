
// const eqArrays = function(arr1, arr2) {
//   let counter = 0;
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] === arr2[i]) {
//         counter++;
//       }
//     }
//     console.log(arr1.length);
//     if (counter === arr1.length) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// };


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

// ACTUAL FUNCTION
const middle = function(array) {
  let newArray = [];
  if (array.length <= 2){
    newArray = [];
  }else if (array.length % 2 === 0){
    let middleNum1 =  Math.floor((array.length - 1) / 2)
    let middleNum2 =  Math.floor((array.length + 1) / 2)
    // console.log("middleNum2",middleNum2)
  newArray.push(array[middleNum1], array[middleNum2]);

} else {
  newArray =array[Math.floor((array.length - 1) / 2)]
}
return newArray;
  //...
}

// TEST CODE
// ...


console.log(middle([1])) // => []
console.log(middle([1, 2]) )// => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5]))// => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) 


// 20min