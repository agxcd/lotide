const findKey = function(object, callback) {
  const key = Object.keys(object);
  const value = Object.values(object);
  for (let i = 0; i < key.length; i++) {
    if (callback(value[i])) {
      // console.log("callback(value[i])", callback(value[i]))
      return key[i];
    }
  }
};

module.exports = findKey;

// let result = findKey({
//   "Blue Hill": {
//     stars: 1
//   },
//   "Akaleri": {
//     stars: 3
//   },
//   "noma": {
//     stars: 2
//   },
//   "elBulli": {
//     stars: 3
//   },
//   "Ora": {
//     stars: 2
//   },
//   "Akelarre": {
//     stars: 3
//   }
// }, x => x.stars === 2);
//
// console.log(result)
//
// const rating = {
//   "Blue Hill": {
//     stars: 1
//   },
//   "Akaleri": {
//     stars: 3
//   },
//   "noma": {
//     stars: 2
//   },
//   "elBulli": {
//     stars: 3
//   },
//   "Ora": {
//     stars: 2
//   },
//   "Akelarre": {
//     stars: 3
//   }
// }
//
// assertEqual(findKey(rating, x => x.stars === 2), "noma");
// assertEqual(findKey(rating, x => x.stars === 0), undefined);
