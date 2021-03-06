const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
};

module.exports = takeUntil;


// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
//
// console.log('---');
//
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
//
//
// assertArraysEqual(takeUntil(["12", "23", "34", "55", "78"], x => x > 50), ["12", "23", "34"]);
// assertArraysEqual(takeUntil(["goo", "doo", "too"], x => x[0] === 't'), ["goo", "doo"]);
// assertArraysEqual(takeUntil([1, 3, 5], x => x % 5 === 0), [1, 3]);
