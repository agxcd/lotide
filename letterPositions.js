const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    }
    results[sentence[i]].push(i);
  }
  return results;
};
module.exports = letterPositions;

// console.log(letterPositions("Hello"));
// console.log(letterPositions("hello").e);


// assertArraysEqual(letterPositions("hello").e, [1]);
