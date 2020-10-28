// const countLetters = function(sentence) {
//   let result = {};
//   for (let letters of sentence) {
//     if (result[letters]) {
//       result[letters] += 1;
//       // console.log("result",result);
//     } else {
//       result[letters] = 1;
//       // console.log("result",result);
//     }
//   }
//   // console.log("result",result);
//   return result;
//
// }
//
// console.log(countLetters("lighthouse in the house"));
//

// const letterPositions = function(sentence) {
//   const results = {};
// for (let letters of sentence){
//   if(result[letters])
// }
//   return results;
// };


// const countLetters = function(sentence) {
//   let result = {};
//   for (let letters of sentence) {
//     if (result[letters]) {
//       result[letters] += 1;
//       // console.log("result",result);
//     } else {
//       result[letters] = 1;
//       // console.log("result",result);
//     }
//   }
//   // console.log("result",result);
//   return result;
//
// }


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

const assertArraysEqual = function(arr1, arr2) {
    let counter = 0;
    if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
          counter++;
        }
      }
    //   console.log("arr1", arr1);
    //   console.log("arr2", arr2);
      if (counter === arr1.length) {
        return ("✅ ✅ ✅ Assertion Passed: " + arr1 + " ===" + arr2);
      } else {
        return ("🔴 🔴 🔴 Assertion Failed: " + arr1 + " !== " + arr2);
      }
    }
  };

assertArraysEqual(letterPositions("hello").e, [1]);
console.log(assertArraysEqual(letterPositions("hello").e, [1]));