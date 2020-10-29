// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   // console.assert(actual === expected);
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//     // console.log("🔴🔴🔴Assertion Passed: " + actual + " === " + expected);
//   } else {
//     console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
//     // console.log("✅✅✅Assertion Failed: " + '"' + actual + '"' + " !== " + '"' + expected + '"');
//   }
// };


// const countLetters = function(allItems, itemsToCount) {
//   let filteredObj = {};
//   for (let item of allItems) {

//     if (itemsToCount[item]) {
//       if (filteredObj[item]) {
//         filteredObj[item] += 1;
//         // console.log("filteredObj",filteredObj);

//       } else {
//         filteredObj[item] = 1;
//         // console.log("filteredObj",filteredObj);
//       }

//     }
//   }
//   // console.log("filteredObj",filteredObj);
//   return filteredObj;

// }

const countLetters = function(sentence) {
  const results = {};
  for (const letter of sentence) {
    console.log(letter);
  }
  return results;
}

// console.log("filteredObj",filteredObj);


// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];



// const result1 = countOnly(firstNames, {
//   "Jason": true,
//   "Karima": true,
//   "Fang": true,
//   "Agouhanna": false
// });

// // console.log("result1", result1)
// // console.log("result1[Jason]", result1["Jason"])
// // console.log("result1[Karima]", result1["Karima"])

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
