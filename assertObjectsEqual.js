// FUNCTION IMPLEMENTATION
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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const obj1KeyNum = Object.keys(object1).length;
  const obj2KeyNum = Object.keys(object2).length;
  if (obj1KeyNum !== obj2KeyNum) {
    return false;
  };
  for (const key in object1) {
    if ((Array.isArray(object1[key])) && (Array.isArray(object2[key]))) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } //add else
    else {
      if (object1[key] !== object2[key]) {
        return false
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
 if (eqObjects(actual, expected)){
  console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
 } else{
  console.log(`🔴 🔴 🔴 Assertion Failed:: ${inspect(actual)} !== ${inspect(expected)}`);
 }
};

let A = { a: '1', b: 2 } 
let B = { b: 2, a: '1' }
assertObjectsEqual(A, B);
// console.log(assertObjectsEqual(A, B));
let C = { a: '1', b: 2 } 
let D = { b: "2", a: '1' }
assertObjectsEqual(C, D);