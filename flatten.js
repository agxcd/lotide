// const flatten = function(input) {
//   const stack = [...input];
//   const res = [];
//   while (stack.length){
// const next = stack.pop()
// if(Array.isArray(next)){
//   stack.push(...next);
// } else{
//   res.push(next);
// }
//   }
//   return res.reverse();
// }


let arr = [0, 1, 2, [[[3, 4]]]];

const flatten = function(arr){
  console.log(arr);
  if(Array.isArray(arr)){

    // Infinity
// let flatArr = arr.flat();
// console.log("flatArr", flatArr);
  }
};

flatten(arr);
console.log(flatten(arr));
