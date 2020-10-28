const assertArraysEqual = function(arr1, arr2) {
  let counter = 0;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        counter++;
      }
    }
    console.log("arr1", arr1);
    console.log("arr2", arr2);
    if (counter === arr1.length) {
      return ("✅✅✅Assertion Passed: " + arr1 + " ===" + arr2);
    } else {
      return ("🔴🔴🔴Assertion Failed: " + arr1 + " !== " + arr2);
    }
  }
};


console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]));
