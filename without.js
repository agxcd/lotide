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

module.exports = without;
//
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => ["1", "2"]
