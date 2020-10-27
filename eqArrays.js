// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

// // Implement a function eqArrays which takes in two arrays and returns true or false,
// // based on a perfect match.


// // Use assertEqual to write test cases for various scenarios.
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// STEP 1

//a function called: eqArrays
//which cheques two input arrays
//arr1 & arr2
//if arr1[i] === arr2[i] => true
//set a counter check weather the counter = arr.length
//if yes true
//else false

const eqArrays = function(arr1, arr2) {

  let counter = 0;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        counter++;
      }
    }
    console.log(arr1.length);
    if (counter === arr1.length) {
      return true;
    } else {
      return false;
    }
  }
};


console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));



// STEP 2
//a function called assertEqual
//takes the function eqArrays output and true/false
// return PASS / NOT PASS

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    return (`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true));
