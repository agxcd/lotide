const flatten = function (input) {
  let results = [];
  for (let i = 0; i < input.length; i++) {
   if(Array.isArray(input[i]) === true) {
     for (let j = 0; j < input[i].length; j++) {
       results.push(input[i][j])
     }
   } else {
     results.push(input[i])
   }
  }
  return results
};
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]