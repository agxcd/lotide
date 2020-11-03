// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  console.log("object1", object1);
  console.log("object2", object2);
  const obj1KeyNum = Object.keys(object1).length;
  const obj2KeyNum = Object.keys(object2).length;

  //check if the length is the same
  if (obj1KeyNum !== obj2KeyNum) {
    return false;
  };
  for (const key in object1) {
    if ((Array.isArray(object1[key])) && (Array.isArray(object2[key]))) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } //add else
    else {
      if (object1[key] !== object2[key]) {
        // console.log("key", key)
        // console.log("object1[key]", object1[key])
        // console.log("object2[key]", object2[key])
        return false
      }
    }
  }
  return true;
};

module.exports = eqObjects;

// const ab = {
//   a: "1",
//   b: "2"
// };
// const ba = {
//   b: "2",
//   a: "1"
// };
// // eqObjects(ab, ba); // => true
// console.log(eqObjects(ab, ba));

// const abc = {
//   a: "1",
//   b: "2",
//   c: "3"
// };
// // eqObjects(ab, abc); // => false
// console.log(eqObjects(ab, abc));


// const cd = {
//   c: "1",
//   d: ["2", 3]
// };
// const dc = {
//   d: ["2", 3],
//   c: "1"
// };
// eqObjects(cd, dc); // => true
// console.log(eqObjects(cd, dc));

// const cd2 = {
//   c: "1",
//   d: ["2", 3, 4]
// };
// eqObjects(cd, cd2); // => false
// console.log(eqObjects(cd, cd2));
