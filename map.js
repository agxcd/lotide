// const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;


// const results1 = map(words, word => word[0]);
//
// console.log(results1);

// assertArraysEqual(map(["12", "23", "34"], word => word[0]), ["1", "2", "3"]);
// assertArraysEqual(map(["goo", "doo", "too"], word => word[2]), ["o", "o", "o"]);
// assertArraysEqual(map([1, 3, 5], num => num * 5), [5, 15, 25]);
