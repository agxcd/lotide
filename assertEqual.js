// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // console.assert(actual === expected);
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    // console.log("🔴🔴🔴Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
    // console.log("✅✅✅Assertion Failed: " + '"' + actual + '"' + " !== " + '"' + expected + '"');
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
