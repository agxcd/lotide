const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false;
  }
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}

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

assertArraysEqual(middle([1]),[]);
// assertArraysEqual(middle([1,2]),[1,2]);
assertArraysEqual(middle([1,2,3]),[2]);
// assertArraysEqual(middle([1,2,3]),[1,2,3,4]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);