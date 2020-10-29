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


const without = function(baseArr, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < baseArr.length; i++) {
    newArr.push(baseArr[i]);
  }
  for (let j = 0; j < newArr.length; j++) {
    for (let k = 0; k < itemsToRemove.length; k++) {
      if (newArr[j] === itemsToRemove[k]) {
        newArr.splice(j, 1);
      }
    }
  }
  return newArr;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => ["1", "2"]
