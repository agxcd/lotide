// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const head = function(arr) {
  let result = arr[0];
  return result;
};

module.exports = head;

//TEST
//
// assertEqual(head([5, 6, 7]), 5)
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")
