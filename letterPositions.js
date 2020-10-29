const letterPositions = function(sentence) {
const results = {};
for (let i = 0 ; i < sentence.length; i++){
if (!results[sentence[i]]){
    results[sentence[i]] = [];
}
results[sentence[i]].push(i);
}return results;
};

// console.log(letterPositions("Hello"));
// console.log(letterPositions("hello").e);
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


assertArraysEqual(letterPositions("hello").e, [1]);
