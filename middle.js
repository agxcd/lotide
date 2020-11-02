const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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
  newArray.push(array[Math.floor((array.length - 1) / 2)]);
}
return newArray;
}

module.exports = middle;

console.log('middle([1])===[]');
assertArraysEqual(middle([1]),[]);

console.log("middle([1,'2',3])===['2']");
assertArraysEqual(middle([1,'2',3]),['2']);

console.log('middle([1,2,3,4]) === [2,3]');
assertArraysEqual(middle([1,2,3,4]),[2,3]);

console.log('middle([1, 2, 3, 4, 5, 6]) === [3,4]');
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);
